const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const app = express();
app.use(express.json()); // Permite serverului să citească JSON
app.use(cors()); // Permite aplicației de mobil să comunice cu serverul

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  family: 4 // Forțează folosirea IPv4 (rezolvă 90% din erorile ECONNREFUSED)
})
.then(() => console.log("✅ Conectat la MongoDB"))
.catch(err => {
  console.error("❌ Eroare conectare DB:");
  console.error(err.message);
});
// --- RUTĂ ÎNREGISTRARE ---
app.post('/api/register', async (req, res) => {
  try {
    const { nume, email, parola } = req.body;

    // 1. Verificăm dacă user-ul există deja
    let userExistat = await User.findOne({ email });
    if (userExistat) {
      return res.status(400).json({ msg: "Acest email este deja utilizat!" });
    }

    // 2. Criptăm parola
    const sare = await bcrypt.genSalt(10);
    const parolaCriptata = await bcrypt.hash(parola, sare);

    // 3. Salvăm în baza de date
    const userNou = new User({
      nume,
      email,
      parola: parolaCriptata
    });

    await userNou.save();
    res.status(201).json({ msg: "Cont creat cu succes!" });

  } catch (error) {
    res.status(500).json({ msg: "Eroare de server la înregistrare" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server pornit pe portul ${PORT}`));

app.post('/api/login', async (req, res) => {
    try {
      const { email, parola } = req.body;
  
      // 1. Căutăm user-ul după email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Email-ul nu este înregistrat!" });
      }
  
      // 2. Verificăm parola
      const parolaCorecta = await bcrypt.compare(parola, user.parola);
      if (!parolaCorecta) {
        return res.status(400).json({ msg: "Parolă incorectă!" });
      }
  
      // 3. Succes! (Trimitem datele user-ului, dar fără parolă)
      res.json({
        msg: "Autentificare reușită!",
        user: { id: user._id, nume: user.nume, puncte: user.puncte }
      });
  
    } catch (error) {
      res.status(500).json({ msg: "Eroare de server la login" });
    }
  });
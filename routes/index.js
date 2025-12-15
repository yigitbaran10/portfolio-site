const express = require('express');
const router = express.Router();

const Education = require('../models/education');
const Experience = require('../models/experience');
const Project = require('../models/project');
const Skill = require('../models/skill');
const Theme = require('../models/theme');
const Suggestions = require('../models/suggestions'); // doğru isim ve path

// GET Anasayfa
router.get('/', async (req, res) => {
  try {
    const education = await Education.getAll();
    const experience = await Experience.getAll();
    const projects = await Project.getAll();
    const skills = await Skill.getAll();
    const themes = await Theme.getAll();

    // successMessage ve errorMessage başlangıçta null
    res.render('index', { 
      education, 
      experience, 
      projects, 
      skills, 
      themes,
      successMessage: null,
      errorMessage: null
    });
  } catch (err) {
    console.error("Sayfa yüklenirken hata:", err);
    res.status(500).send("Sayfa yüklenemiyor");
  }
});

// POST Öneri gönder
router.post('/suggestion', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await Suggestions.create({ name, email, message });

    // Verileri tekrar çek ve başarı mesajı ile render et
    const education = await Education.getAll();
    const experience = await Experience.getAll();
    const projects = await Project.getAll();
    const skills = await Skill.getAll();
    const themes = await Theme.getAll();

    res.render('index', {
      education,
      experience,
      projects,
      skills,
      themes,
      successMessage: "Öneriniz gönderildi, teşekkürler!",
      errorMessage: null
    });
  } catch (err) {
    console.error("Öneri eklerken hata:", err);

    const education = await Education.getAll();
    const experience = await Experience.getAll();
    const projects = await Project.getAll();
    const skills = await Skill.getAll();
    const themes = await Theme.getAll();

    res.render('index', {
      education,
      experience,
      projects,
      skills,
      themes,
      successMessage: null,
      errorMessage: "Öneriniz gönderilemedi, lütfen tekrar deneyin."
    });
  }
});

module.exports = router;

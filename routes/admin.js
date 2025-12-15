const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Theme = require('../models/theme');
const Education = require('../models/education');
const Experience = require('../models/experience');
const Project = require('../models/project');
const Skill = require('../models/skill');
const Suggestions = require('../models/suggestions');

// Admin oturumu kontrol
function ensureAdmin(req, res, next) {
  if (req.session.user) return next();
  res.redirect('/admin/login');
}

// Login sayfası
router.get('/login', (req, res) => res.render('login'));

// Login POST
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByUsername(username);
  if (!user) return res.send('Kullanıcı bulunamadı');

  const match = await bcrypt.compare(password, user.password);
  if (match) {
    req.session.user = user;
    res.redirect('/admin');
  } else {
    res.send('Şifre hatalı');
  }
});

// Admin paneli ana sayfa
router.get('/', ensureAdmin, async (req, res) => {
  const suggestions = await Suggestions.getAll();
  const education = await Education.getAll();
  const experience = await Experience.getAll();
  const projects = await Project.getAll();
  const skills = await Skill.getAll();
  const themes = await Theme.getAll();

  res.render('admin', {
    suggestions,
    education,
    experience,
    projects,
    skills,
    themes,
    currentThemeClass: 'light'
  });
});

// CRUD Routes

// Education
router.post('/add/education', ensureAdmin, async (req, res) => {
  await Education.create(req.body);
  res.redirect('/admin');
});
router.post('/delete/education/:id', ensureAdmin, async (req, res) => {
  await Education.delete(req.params.id);
  res.redirect('/admin');
});

// Experience
router.post('/add/experience', ensureAdmin, async (req, res) => {
  await Experience.create(req.body);
  res.redirect('/admin');
});
router.post('/delete/experience/:id', ensureAdmin, async (req, res) => {
  await Experience.delete(req.params.id);
  res.redirect('/admin');
});

// Project
router.post('/add/project', ensureAdmin, async (req, res) => {
  await Project.create(req.body);
  res.redirect('/admin');
});
router.post('/delete/project/:id', ensureAdmin, async (req, res) => {
  await Project.delete(req.params.id);
  res.redirect('/admin');
});

// Skill
router.post('/add/skill', ensureAdmin, async (req, res) => {
  await Skill.create(req.body);
  res.redirect('/admin');
});
router.post('/delete/skill/:id', ensureAdmin, async (req, res) => {
  await Skill.delete(req.params.id);
  res.redirect('/admin');
});

// Theme
router.post('/add/theme', ensureAdmin, async (req, res) => {
  await Theme.create(req.body);
  res.redirect('/admin');
});
router.post('/delete/theme/:id', ensureAdmin, async (req, res) => {
  await Theme.delete(req.params.id);
  res.redirect('/admin');
});

// Suggestion
router.post('/delete/suggestion/:id', ensureAdmin, async (req, res) => {
  try {
    await Suggestions.delete(req.params.id);
    res.redirect('/admin');
  } catch (err) {
    console.error("Öneri silinirken hata:", err);
    res.status(500).send("Öneri silinemedi");
  }
});

module.exports = router;

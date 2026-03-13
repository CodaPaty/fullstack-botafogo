const express = require('express');
const cors = require('cors');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

const app = express();
app.use(cors());
app.use(express.json());

let db;

(async () => {
    db = await open({
        filename: './petinder.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS pets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            especie TEXT,
            porte TEXT,
            foto TEXT
        )
    `);
})();

// Listar todos os pets
app.get('/pets', async (req, res) => {
    const pets = await db.all('SELECT * FROM pets');
    res.json(pets);
});

// Salvar novo pet
app.post('/pets', async (req, res) => {
    const { nome, especie, porte, foto } = req.body;
    const result = await db.run(
        'INSERT INTO pets (nome, especie, porte, foto) VALUES (?, ?, ?, ?)',
        [nome, especie, porte, foto]
    );
    res.json({ id: result.lastID, ...req.body });
});

// DELETAR Pet
app.delete('/pets/:id', async (req, res) => {
    const { id } = req.params;
    await db.run('DELETE FROM pets WHERE id = ?', id);
    res.json({ message: "Pet removido com sucesso" });
});

app.listen(3000, () => console.log('🚀 Backend rodando em http://localhost:3000'));
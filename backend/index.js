const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vacationRoutes = require('./routes/vacationRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', vacationRoutes);


const PORT = process.env.PORT || 27017;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const { astro } = require('iztro');

/**
 * Calculates the Zi Wei Dou Shu astrolabe.
 * 
 * @param {string} solarDateStr - Solar date in YYYY-MM-DD format.
 * @param {number} hourIndex - Hour index (0-12). 
 *                             0: Zi (23:00-01:00), 1: Chou (01:00-03:00), ..., 
 *                             11: Hai (21:00-23:00), 12: Night Zi (23:00-00:00).
 * @param {string} gender - 'male' or 'female'.
 */
function calculate(solarDateStr, hourIndex, gender) {
    try {
        const genderName = gender === 'male' ? '男' : '女';
        const astrolabe = astro.bySolar(solarDateStr, hourIndex, genderName);
        console.log(JSON.stringify(astrolabe, null, 2));
    } catch (error) {
        console.error('Error calculating astrolabe:', error.message);
        process.exit(1);
    }
}

const args = process.argv.slice(2);
if (args.length < 3) {
    console.log('Usage: node calculate.js <YYYY-MM-DD> <hourIndex> <gender>');
    console.log('hourIndex: 0 (Early Zi 00-01), 1 (Chou 01-03), ..., 11 (Hai 21-23), 12 (Late Zi 23-00)');
    console.log('gender: male | female');
    process.exit(1);
}

const date = args[0];
const hour = parseInt(args[1], 10);
const gender = args[2].toLowerCase();

calculate(date, hour, gender);

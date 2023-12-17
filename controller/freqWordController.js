const a1 = require('../data/freqWords/a1.json')
const a2 = require('../data/freqWords/a2.json')
const b1 = require('../data/freqWords/b1.json')
const b2 = require('../data/freqWords/b2.json')
const c1 = require('../data/freqWords/c1.json')

async function getFreqWords(req, res) {
    try {
      const {count, level} = req.params;
      let data = [];
      if(!count && !level) return res.status(400).send("count or level not found");
      if(Number(count)<0 || Number(count)>900) return res.status(400).send("count is invalid");
      const leavels = level.split(",");
      for(let item of leavels){
          if(!["a1", "a2", "b1", "b2", "c1"].includes(item)) return res.status(400).send("level is invalid");  
      }
      const result = [];
      for (let i = 0; i < count; i++) {
          let index = Math.floor(Math.random()*leavels.length);
          switch (leavels[index]) {
              case 'a1': data = a1; break;
              case 'a2': data = a2; break;
              case 'b1': data = b1; break;
              case 'b2': data = b2; break;
              default: data = c1;
          }
          let i = Math.floor(Math.random() * data.length);
          result.push(data[i]);
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: `Data fetch error: ${error}` });
    }
  }
  

module.exports = getFreqWords;
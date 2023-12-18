const os = require('os');


setInterval(() => {
    const {
        arch,
        platform,
        totalmem,
        freemem
    } = os;
    
    const tRam = totalmem() / (1024*1024);
    const lRam = freemem() / (1024*1024);
    const uRam = tRam - lRam;
    const usada = (uRam / tRam) * 100;
    
    const stats = {
        'Sistema Operacional': platform(),
        'Arquitetura': arch(),
        'Total memoria Ram': `${parseInt(tRam)} MB`,
        'Ram usada': `${parseInt(uRam)} MB`,
        'Ram livre': `${parseInt(lRam)} MB`,
        'Consumo': `${usada.toFixed(2)}%`
    }
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000)

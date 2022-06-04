const text = "     Hello World!     ";

const trimText = function()
{
    const trimmed= text.trim();
    console.log(trimmed)
}

const lowerCase = function()
{
    const small = text.toLowerCase();
    console.log(small)
}

const upperCase = function()
{    const capital = text.toUpperCase();
    console.log(capital)
}

module.exports.trimText=trimText;
module.exports.lowerCase=lowerCase;
module.exports.upperCase=upperCase;

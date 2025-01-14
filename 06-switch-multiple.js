let year = prompt('Enter a year to know the Chinese Zodiac', '');

switch (year) {
    case '2013':
    case '2025':
        alert('Year of the Snake!' + String.fromCodePoint(0x1F40D));
        break;
    case '2014':
    case '2026':
        alert('Year of the Horse!' + String.fromCodePoint(0x1F434));
        break;
    case '2015':
    case '2027':
        alert('Year of the Goat!' + String.fromCodePoint(0x1F410));
        break;
    case '2016':
    case '2028':
        alert('Year of the Monkey!' + String.fromCodePoint(0x1F412));
        break;
    case '2017':
    case '2029':
        alert('Year of the Rooster!' + String.fromCodePoint(0x1F413));
        break;
    case '2018':
    case '2030':
        alert('Year of the Dog!' + String.fromCodePoint(0x1F415));
        break;
    case '2019':
    case '2031':
        alert('Year of the Pig!' + String.fromCodePoint(0x1F416));
        break;
    case '2020':
    case '2032':
        alert('Year of the Rat!' + String.fromCodePoint(0x1F400));
        break;
    case '2021':
    case '2033':
        alert('Year of the Ox!' + String.fromCodePoint(0x1F402));
        break;
    case '2022':
    case '2034':
        alert('Year of the Tiger!' + String.fromCodePoint(0x1F405));
        break;
    case '2023':
    case '2035':
        alert('Year of the Rabbit!' + String.fromCodePoint(0x1F407));
        break;
    case '2024':
    case '2036':
        alert('Year of the Dragon!' + String.fromCodePoint(0x1F409));
        break;
    default:
        alert('Year not found!');
        break;
}
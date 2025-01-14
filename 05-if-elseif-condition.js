let stoplight = prompt('Enter a color to know the meaning of the stoplight', '');
if (stoplight === 'red') {
    alert('Stop!');
} else if (stoplight === 'yellow') {
    alert('Slow down!');
} else if (stoplight === 'green') {
    alert('Go!');
} else {
    alert('Color not found!');
}
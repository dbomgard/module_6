const field = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(Math.random() < 0.5 ? 'X' : 'O');
    }
    field.push(row);
    console.log(field[i].join(' '))
}
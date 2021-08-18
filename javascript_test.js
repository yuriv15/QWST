// Teste de JavaScript

// Utilizando apenas JavaScript, resolva as questões abaixo. Elabore sua resposta e cole abaixo dos
// respectivos enunciados.

// 1 – Crie uma função que reverta qualquer string inserida.

function reverse_string(string) {
     return string.split('').reverse().join('');
}

let reversed = reverse_string('inverted sentence');
console.log(reversed);


// 2 – Crie uma função que retorne true quando a string inserida for um palíndromo e false quando não.
// * Palíndromo: palavra ou sentença que se pode ler, indiferentemente, da esquerda para a direita ou
// vice-versa.
// Exemplos de palindromo: eye, osso, radar, ovo, race car.

function check_palindrome(string) {
    let no_spaced_string = string.split(' ').join('');
    let reversed = reverse_string(no_spaced_string);
    return no_spaced_string === reversed;
}

console.log(check_palindrome('race car'));
console.log(check_palindrome('word'));


// 3 – Crie uma função que remova os itens com IDs duplicados do array de objetos abaixo:
// const arr = [
// {id: 1, name: "test1"},
// {id: 2, name: "test2"},
// {id: 2, name: "test3"},
// {id: 3, name: "test4"},
// {id: 4, name: "test5"},
// {id: 5, name: "test6"},
// {id: 5, name: "test7"},
// {id: 6, name: "test8"}
// ];

function remove_duplicates(array) {
    let duplicated_ids = [];
    for (let i = 0; i < array.length; i++) {
        let item1 = array[i];
        for (let j = i+1; j < array.length; j++) {
            let item2 = array[j];
            if (item1.id === item2.id) {
                duplicated_ids.push(item1.id);
                break;
            }
        }
    }
    return array.filter(item=>!duplicated_ids.includes(item.id));
}

const arr = [
    {id: 1, name: "test1"},
    {id: 2, name: "test2"},
    {id: 2, name: "test3"},
    {id: 3, name: "test4"},
    {id: 4, name: "test5"},
    {id: 5, name: "test6"},
    {id: 5, name: "test7"},
    {id: 6, name: "test8"}
];
console.log(remove_duplicates(arr))


// 4 – Crie uma função que retorne um array que consiste no maior número de cada subarray fornecido.
// Para simplificar, o array fornecido conterá exatamente 4 subarrays.
// * Array deverá ser utilizado: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function filter_bigger(array) {
    let biggest = 0;
    for (let i = 0; i < array.length; i++) {
        biggest = array[i][0];
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > biggest) {
                biggest = array[i][j];
            }
        }
        array[i] = biggest;
    }
    return array;
}

let array4 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(filter_bigger(array4))


// 5 - Crie uma função que receba um array com 2 números e retorne a soma desses dois números mais a
// soma de todos os números entre eles. O menor número nem sempre virá primeiro.
// * Exemplos: Passando um array com os números [5, 10], o retorno seria 45.

function summation(array) {
    let summation = 0;
    for (let i = array[0]; i <= array[1]; i++) {
        summation += i;
    }
    return summation;
}

console.log(summation([5,10]));


// 6 - Desenvolva uma função que compare 2 arrays e retorne um novo array contendo apenas os itens que
// estejam contidos em apenas 1 dos arrays.
// * Exemplo: Ao comparar os arrays [1, 2, 3, 5] e [1, 2, 3, 4, 5], o retorno seria [4].

function filter_uniques(array1,array2) {
    let duplicated_items = [];
    for (let i = 0; i < array1.length; i++) {
        let item1 = array1[i];
        for (let j = 0; j < array2.length; j++) {
            let item2 = array2[j];
            if (item1 === item2) {
                duplicated_items.push(item1);
                break;
            }
        }
    }
    return array1.concat(array2).filter(item => !duplicated_items.includes(item));
}

console.log(filter_uniques([1, 2, 3, 5], [1, 2, 3, 4, 5]));

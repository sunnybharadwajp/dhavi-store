export function createDummyData(numOfRecords) {
    let counter = 1;
    let data = [];
    while (counter <= numOfRecords) {
        data = [...data, {
            title: "Lorem ipsum dolor sit amet, consetetur",
            index: counter,
            image_url: "https://bulma.io/assets/images/placeholders/800x480.png",
            date: new Date(),
            price: Math.round(Math.random() * 10000),
        }];
        counter++;
    }
    return data;
}
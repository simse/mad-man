const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-UK", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
};

const capitaliseSentence = (input: string): string => {
    const words = input.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");
}

export {
    formatDate,
    capitaliseSentence
}
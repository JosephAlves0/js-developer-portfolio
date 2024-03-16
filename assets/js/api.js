async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/JosephAlves0/js-developer-portfolio/main/data/profile.json';
    const fetching = await fetch(url);
    return fetching.json();
};
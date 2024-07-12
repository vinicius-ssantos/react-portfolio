export const getImageUrl =(path)=>{
    return new URL(`/assets/${path}`, import.meta.url).href; // retorna a url da imagem que está na pasta assets com o nome passado como parâmetro
};
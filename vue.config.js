module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/LaPuissance/" : "/",
    devServer: {
        proxy: 'https://datos.madrid.es/datosabiertos/DEPORTES/RESULTADOS_DE_LOS_JUEGOS_CLASIFICACIONES/2022/11/',
    }
}
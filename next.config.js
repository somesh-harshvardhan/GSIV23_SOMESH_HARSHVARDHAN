/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        TMDB_READ_ACCESS_TOKEN : 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmJhNTg4ZTUwNDU0MWI5ZmQyOGNkMTVmODg5MzE5OSIsInN1YiI6IjY0ZGNmYmUxYjU0MDAyMDBhZWQ1YzJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3aKNP6oHcyUn3XIZcoTeMKSuk_bY00vRfHZL7yIjYyw',
        TMDB_API_KEY : '8bba588e504541b9fd28cd15f8893199',
    },
    images : {
       domains : ["image.tmdb.org"]
    }
}

module.exports = nextConfig

import http from '../StarwarsAPI'

const getStarWarsCharacter = (characterNumber: number) => {
    return http.get(`/people/${characterNumber}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getStarWarsCharacter
}
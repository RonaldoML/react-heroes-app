import React from 'react'
import { HeroList } from '../heroe/HeroList'

export const MarvelScreen = () => {

    return (
        <div>
            <h1>Marvel</h1>

            {
                <HeroList publisher="Marvel Comics" />
            }

        </div>
    )
}

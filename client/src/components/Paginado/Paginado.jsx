import React from 'react'
import './Paginado.css'

const Paginado = ({ dogsAll, paged, dogsPage, dogsCurrent }) => {
    const getNum = [];

    for (let i = 1; i <= Math.ceil(dogsAll / dogsPage); i++) {
        getNum.push(i);
    }
    return (
        <footer className='footer'>
            <nav>
                <ul className='flexPaged ul'>
                    {
                        getNum?.map(n => (
                            <li  >
                                <button
                                    className={dogsCurrent === n ? 'li active' : 'li'}
                                    key={n} onClick={() => paged(n)}
                                >
                                    {n}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </footer>
    )
}

export default Paginado;

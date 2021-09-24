import Cemita from '../../../images/cemita.png';
import Torta from '../../../images/torta.png';
import Sandwich from '../../../images/sandwich.png';
import Chilaquiles from '../../../images/chilaquiles.png';
import Desayuno from '../../../images/desayuno.png';
import Especial1 from '../../../images/especial-1.png';
import Especial2 from '../../../images/especial-2.png';

const Sections = [
    {
        id: 1,
        title: 'Cemitas y Tortas',
        images: [Cemita, Torta],
        menu: {
            cemitas: [
                'Milanesa',
                'Pollo',
                'Carne Enchilada',
                'Cubana',
                'Hawaiana'
            ],
            tortas: [
                'Milanesa',
                'Pollo',
                'Carne Enchilada',
                'Cubana'
            ]
        } 
    },
    {
        id: 2,
        title: 'Desayunos',
        images: [Sandwich, Chilaquiles, Desayuno],
        menu: [
            'Ord. Huevos al gusto',
            'Sándwich',
            'Enchiladas Verdes/Rojas',
            'Chilaquiles Verdes/Rojos',
            'Moyetes',
            'Coctel de frutas',
            'Jugos/Licuados'
        ]
    },
    {
        id: 3,
        title: 'Especiales',
        images: [Especial1, Especial2],
        menu: [
            'Club sándwich',
            'Milanesa de pollo/res',
            'Ord tacos campechanos',
            'Costilla de roastbeef',
            'Parrilla Hawaiana'
        ]
    }
]

export default Sections;
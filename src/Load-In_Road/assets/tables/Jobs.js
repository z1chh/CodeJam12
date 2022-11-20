// Create jobs
const jobs = [
    {
        id: 1,
        shipper: 'LKC',
        carrier: 'Jarad_Higgins',
        posted_day: '2022-10-31',
        expected_delivery_day: '2022-11-30',
        start_location: '2100, Maisonneuve O Blvd',
        end_location: '128, Howie-Morenz St, Vaudreuil-Dorion',
        rate: '750',
        cargo: '8000'
    },
    {
        id: 2,
        shipper: 'LKC',
        carrier: 'JimmePrice',
        posted_day: '2022-11-19',
        expected_delivery_day: '2022-12-24',
        start_location: '390, Cote-Vertu Blvd, Montreal',
        end_location: '1069, Rte 117, Saint-Adele',
        rate: '1400',
        cargo: '25000'
    },
    {
        id: 3,
        shipper: 'Kalberto',
        carrier: 'JimmePrice',
        posted_day: '2022-11-20',
        expected_delivery_day: '2022-11-24',
        start_location: '1000, De La Gauchetiere St, Montreal',
        end_location: '444, Saint-George St, Mont-Tremblant',
        rate: '3200',
        cargo: '15000'
    },
    {
        id: 4,
        shipper: 'Kalberto',
        carrier: 'Jarad_Higgins',
        posted_day: '2022-11-20',
        expected_delivery_day: '2022-11-30',
        start_location: '237, Yonge St, Toronto',
        end_location: '930, Buchanan St, Montreal',
        rate: '8000',
        cargo: '45000'
    },
    {
        id: 5,
        shipper: 'Kalberto',
        carrier: '',
        posted_day: '2022-11-17',
        expected_delivery_day: '2023-01-21',
        start_location: '157, Dundas St, Toronto',
        end_location: '3121, Hochelaga Blvd, Quebec',
        rate: '8500',
        cargo: '55000'
    },
    {
        id: 6,
        shipper: 'Kadriel',
        carrier: 'Charlton_Howard',
        posted_day: '2022-11-19',
        expected_delivery_day: '2022-11-19',
        start_location: '5882, 2e Avenue, Montreal',
        end_location: '5873, 4e Avenue, Montreal',
        rate: '100',
        cargo: '75'
    },
    {
        id: 7,
        shipper: 'Kadriel',
        carrier: 'Charlton_Howard',
        posted_day: '2022-11-20',
        expected_delivery_day: '2022-11-20',
        start_location: '5882, 2e Avenue, Montreal',
        end_location: '5873, 4e Avenue, Montreal',
        rate: '100',
        cargo: '100'
    },
    {
        id: 8,
        shipper: 'Kadriel',
        carrier: '',
        posted_day: '2022-11-20',
        expected_delivery_day: '2022-11-20',
        start_location: '5882, 2e Avenue, Montreal',
        end_location: '5873, 4e Avenue, Montreal',
        rate: '100',
        cargo: '200'
    },
    {
        id: 9,
        shipper: 'LKC',
        carrier: 'Jarad_Higgins',
        posted_day: '2022-10-15',
        expected_delivery_day: '2022-11-21',
        start_location: '3200, Chemin de la Cote-Sainte-Catherine, Montreal',
        end_location: '2685, King O Avenue, Sherbrooke',
        rate: '8000',
        cargo: '15000'
    }
];

module.exports = jobs;

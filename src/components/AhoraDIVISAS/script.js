const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', () => {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  // Definir los índices de conversión
  const conversionRates = {
    'GBP': 0.8538,
    'USD': 1.1022,
    'JPY': 153.8400,
    'CNY': 7.9274,
    'ALL': 104.0500,
    'AOA': 904.8127,
    'IRR': 4.1209,
    'DZD': 148.3503,
    'ARS': 289.6779,
    'AMD': 425.7000,
    'AUD': 1.6479,
    'AZN': 1.8755,
    'BDT': 118.2746,
    'BHD': 0.4266,
    'BZD': 2.1976,
    'BYN': 3.1887,
    'BOB': 7.5453,
    'BAM': 1.9558,
    'BWP': 14.7655,
    'BRL': 5.3477,
    'BND': 1.4780,
    'BGN': 1.9558,
    'KHR': 4570.5000,
    'CAD': 1.4574,
    'QAR': 3.9880,
    'CZK': 23.8280,
    'CLP': 898.5500,
    'COP': 4187.4997,
    'KRW': 1420.8000,
    'DKK': 7.4524,
    'EGP': 34.0533,
    'AED': 4.0236,
    'ETB': 60.3148,
    'PHP': 60.9700,
    'FJD': 0.4057,
    'LVL': 2.8469,
    'GHS': 12.0947,
    'HKD': 8.6268,
    'HUF': 376.4800,
    'INR': 90.7173,
    'IDR': 16608.8000,
    'IRR': 44674.0000,
    'ISK': 146.9000,
    'ILS': 4.0450,
    'JOD': 781.2500,
    'KZT': 485.4000,
    'KES': 155.1603,
    'KGS': 96.8439,
    'KWD': 0.3363,
    'LAK': 20822.0000,
    'LBP': 16315.5000,
    'MYR': 5.1263,
    'MAD': 10.7743,
    'MUR': 50.2924,
    'MRO': 38.9300,
    'MXN': 18.7485,
    'MDL': 20.1151,
    'MNT': 3738.4600,
    'MZN': 70.4400,
    'MMK': 2315.1000,
    'NAD': 20.3336,
    'NPR': 129.6179,
    'NGN': 863.2189,
    'NOK': 11.3310,
    'NZD': 1.7818,
    'OMR': 0.4213,
    'PKR': 305.7510,
    'PAB': 0.2542,
    'PYG': 8001.7700,
    'PEN': 3.9836,
    'PLN': 4.4473,
    'DOP': 57.2766,
    'RON': 4.9510,
    'RUB': 99.8890,
    'RSD': 117.2331,
    'SGD': 1.4751,
    'LKR': 208.4879,
    'ZAR': 20.3368,
    'SEK': 11.6800,
    'CHF': 0.9683,
    'THB': 38.4340,
    'TWD': 33.4240,
    'TZS': 2536.6524,
    'TJS': 11.9945,
    'TTD': 7.3935,
    'TND': 3.3778,
    'TRY': 28.8159,
    'TMT': 3.8581,
    'UAH': 40.1670,
    'UGX': 4047.9050,
    'UYU': 41.9326,
    'UZS': 12781.2900,
    'VES': 28.7966,
    'VND': 26192.0000,
    'ZMW': 20.1008,
    'ZWL': 5513.7211
  };

  // Verificar si las monedas de origen y destino son válidas
  if (from in conversionRates && to in conversionRates) {
    // Realizar la conversión
    const result = amount * (conversionRates[to] / conversionRates[from]);

    document.getElementById('result').textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
  } else {
    document.getElementById('result').textContent = 'Las monedas seleccionadas no son válidas';
  }
});

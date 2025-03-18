import React, { useState, useEffect } from 'react';

const vehicleData = {
  Toyota: {
    Camry: {
      trims: ['LE', 'SE', 'XLE'],
      engines: {
        LE: ['2.5L I4', '3.5L V6'],
        SE: ['2.5L I4', '3.5L V6'],
        XLE: ['2.5L I4', '3.5L V6'],
      },
    },
    Corolla: {
      trims: ['L', 'LE', 'XSE'],
      engines: {
        L: ['1.8L I4'],
        LE: ['1.8L I4'],
        XSE: ['2.0L I4'],
      },
    },
  },
  Ford: {
    F150: {
      trims: ['XL', 'XLT', 'Lariat'],
      engines: {
        XL: ['3.3L V6', '5.0L V8'],
        XLT: ['2.7L V6 EcoBoost', '5.0L V8'],
        Lariat: ['2.7L V6 EcoBoost', '3.5L V6 EcoBoost'],
      },
    },
    Escape: {
      trims: ['S', 'SE', 'Titanium'],
      engines: {
        S: ['1.5L I3 EcoBoost'],
        SE: ['1.5L I3 EcoBoost'],
        Titanium: ['2.0L I4 EcoBoost'],
      },
    },
  }
};

const GetAQuote = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedTrim, setSelectedTrim] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');
  const [models, setModels] = useState([]);
  const [trims, setTrims] = useState([]);
  const [engines, setEngines] = useState([]);

  useEffect(() => {
    if (selectedBrand) {
      setModels(Object.keys(vehicleData[selectedBrand] || {}));
      setSelectedModel('');
      setTrims([]);
      setEngines([]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      setTrims(vehicleData[selectedBrand]?.[selectedModel]?.trims || []);
      setSelectedTrim('');
      setEngines([]);
    }
  }, [selectedModel]);

  useEffect(() => {
    if (selectedTrim) {
      setEngines(vehicleData[selectedBrand]?.[selectedModel]?.engines[selectedTrim] || []);
      setSelectedEngine('');
    }
  }, [selectedTrim]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Brand: ${selectedBrand}, Model: ${selectedModel}, Trim: ${selectedTrim}, Engine: ${selectedEngine}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Get a Quote</h2>

      <label className="block mb-2">Car Brand:</label>
      <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="w-full p-2 border rounded mb-4">
        <option value="">Select Brand</option>
        {Object.keys(vehicleData).map((brand) => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>

      {models.length > 0 && (
        <>
          <label className="block mb-2">Car Model:</label>
          <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} className="w-full p-2 border rounded mb-4">
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </>
      )}

      {trims.length > 0 && (
        <>
          <label className="block mb-2">Car Trim:</label>
          <select value={selectedTrim} onChange={(e) => setSelectedTrim(e.target.value)} className="w-full p-2 border rounded mb-4">
            <option value="">Select Trim</option>
            {trims.map((trim) => (
              <option key={trim} value={trim}>{trim}</option>
            ))}
          </select>
        </>
      )}

      {engines.length > 0 && (
        <>
          <label className="block mb-2">Car Engine:</label>
          <select value={selectedEngine} onChange={(e) => setSelectedEngine(e.target.value)} className="w-full p-2 border rounded mb-4">
            <option value="">Select Engine</option>
            {engines.map((engine) => (
              <option key={engine} value={engine}>{engine}</option>
            ))}
          </select>
        </>
      )}

      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Get a Quote</button>
    </form>
  );
};

export default GetAQuote;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MotorVehicleAccidentIntelligence from './pages/MotorVehicleAccidentIntelligence';
import DppaCompliance from './pages/DppaCompliance';
import InsideAccidentReports from './pages/InsideAccidentReports';
import InvestigativeIntelligence from './pages/InvestigativeIntelligence';
import CaseIntakeValue from './pages/CaseIntakeValue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/personal-injury/motor-vehicle-accident-intelligence" replace />} />

        <Route
          path="/personal-injury/motor-vehicle-accident-intelligence"
          element={<MotorVehicleAccidentIntelligence />}
        />
        <Route
          path="/personal-injury/dppa-compliance-motor-vehicle-accident-data"
          element={<DppaCompliance />}
        />
        <Route
          path="/personal-injury/inside-motor-vehicle-accident-reports"
          element={<InsideAccidentReports />}
        />
        <Route
          path="/personal-injury/investigative-mva-intelligence-for-law-firms"
          element={<InvestigativeIntelligence />}
        />
        <Route
          path="/personal-injury/mva-intelligence-case-intake-and-case-value"
          element={<CaseIntakeValue />}
        />
        // Fallback
        <Route path="*" element={<Navigate to="/personal-injury/motor-vehicle-accident-intelligence" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

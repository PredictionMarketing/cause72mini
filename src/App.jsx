import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MotorVehicleAccidentIntelligence from './pages/MotorVehicleAccidentIntelligence';
import DppaCompliance from './pages/DppaCompliance';
import InsideAccidentReports from './pages/InsideAccidentReports';
import InvestigativeIntelligence from './pages/InvestigativeIntelligence';
import CaseIntakeValue from './pages/CaseIntakeValue';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage - New blended landing page */}
        <Route path="/" element={<HomePage />} />

        {/* Article Pages */}
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
      </Routes>
    </Router>
  );
}

export default App;

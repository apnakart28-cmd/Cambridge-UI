import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Info, Users, Building } from 'lucide-react';

// Importing all PDF assets
import certificateOfLand from '../assets/CERTIFICATE-OF-LAND.pdf';
import mandatoryDisclosurePdf from '../assets/MANDATORY-PUBLIC-DISCLOSURE-2026.pdf';
import pta from '../assets/PTA.pdf';
import selfCertification from '../assets/Self-Certification.pdf';
import academicCalendar from '../assets/academic-calendar.pdf';
import feeStructure from '../assets/FEE-STRUCTURE-23-24.pdf';
import nocStateGov from '../assets/NOC-FROM-STATE-GOVERNMENT.pdf';
import smc from '../assets/SMC.pdf';
import annualSchedule from '../assets/ANNUAL-SCHEDULE.pdf';
import fireSafety from '../assets/FIRE-&-LIFE-SAFTY-CIRTIFICATE.pdf';
import oxfordGrant from '../assets/OXFORD-GRANT-2026.pdf';
import recognitionLetter from '../assets/RECOGNITATION-LETTER.pdf';
import trustDeed from '../assets/Trust-Deed.pdf';
import bookList from '../assets/book-list.pdf';
import buildingCert from '../assets/BUILDING-CIRTIFICATE.pdf';
import resultPdf from '../assets/result.pdf';
import sectionWiseStudent from '../assets/SECTION-WISE-STUDENT.pdf';
import waterHealthCert from '../assets/WATER-HEALTH-CIRTIFICATE.pdf';

function MandatoryDisclosure() {
  // Section A: General Information[cite: 1]
  const generalInfo = [
    { id: 'gen-1', label: 'Name of the School', value: 'Oxford Public School' },
    { id: 'gen-2', label: 'Affiliation No. (If applicable)', value: '2133870' },
    { id: 'gen-3', label: 'School Code (If applicable)', value: '70000' },
    { id: 'gen-4', label: 'Complete Address with Pin Code', value: 'Raskoopa Bahadurpur, Kanth, Shahjahanpur, U.P. Pin-242223' },
    { id: 'gen-5', label: 'Principal Name & Qualification', value: 'Mr. Bagish Kumar Pandey (M.Sc., B.Ed)' },
    { id: 'gen-6', label: 'School Email ID', value: 'info@opsspn.in' },
    { id: 'gen-7', label: 'Contact Details (Landline/Mobile)', value: '+91 9415847324' },
  ];

  // Section B: Documents & Information (Updated with all your PDFs)[cite: 1]
  const documentsInfo = [
    { id: 'doc-1', title: 'Certificate of Land', link: certificateOfLand },
    { id: 'doc-2', title: 'Mandatory Public Disclosure 2026', link: mandatoryDisclosurePdf },
    { id: 'doc-3', title: 'PTA (Parent Teacher Association)', link: pta },
    { id: 'doc-4', title: 'Self Certification', link: selfCertification },
    { id: 'doc-5', title: 'Academic Calendar', link: academicCalendar },
    { id: 'doc-6', title: 'Fee Structure (2023-24)', link: feeStructure },
    { id: 'doc-7', title: 'NOC from State Government', link: nocStateGov },
    { id: 'doc-8', title: 'SMC (School Management Committee)', link: smc },
    { id: 'doc-9', title: 'Annual Schedule', link: annualSchedule },
    { id: 'doc-10', title: 'Fire & Life Safety Certificate', link: fireSafety },
    { id: 'doc-11', title: 'Oxford Grant 2026', link: oxfordGrant },
    { id: 'doc-12', title: 'Recognition Letter', link: recognitionLetter },
    { id: 'doc-13', title: 'Trust Deed', link: trustDeed },
    { id: 'doc-14', title: 'Book List', link: bookList },
    { id: 'doc-15', title: 'Building Certificate', link: buildingCert },
    { id: 'doc-16', title: 'Result', link: resultPdf },
    { id: 'doc-17', title: 'Section-wise Student Details', link: sectionWiseStudent },
    { id: 'doc-18', title: 'Water, Health and Sanitation Certificate', link: waterHealthCert },
  ];

  // Section C: Staff (Teaching)[cite: 1]
  const staffInfo = [
    { id: 'staff-1', label: 'Principal', value: '1' },
    { id: 'staff-2', label: 'Total No. of Teachers', value: '45' },
    { id: 'staff-3', label: 'PGT', value: '12' },
    { id: 'staff-4', label: 'TGT', value: '18' },
    { id: 'staff-5', label: 'PRT', value: '15' },
    { id: 'staff-6', label: 'Teachers Section Ratio', value: '1:1.5' },
    { id: 'staff-7', label: 'Details of Special Educator', value: '1' },
    { id: 'staff-8', label: 'Details of Counsellor and Wellness Teacher', value: '1' },
  ];

  // Section D: School Infrastructure[cite: 1]
  const infrastructureInfo = [
    { id: 'infra-1', label: 'Total Campus Area of the School (in Sq Mtr)', value: '8000 Sq. Mtr.' },
    { id: 'infra-2', label: 'No. and Size of the Class Rooms (in Sq Mtr)', value: '40 (Approx 46 Sq. Mtr. each)' },
    { id: 'infra-3', label: 'No. and Size of Laboratories including Computer Labs (in Sq Mtr)', value: '4 (Approx 55 Sq. Mtr. each)' },
    { id: 'infra-4', label: 'Internet Facility', value: 'Yes (Broadband/Wi-Fi)' },
    { id: 'infra-5', label: 'No. of Girls Toilets', value: '15' },
    { id: 'infra-6', label: 'No. of Boys Toilets', value: '15' },
    { id: 'infra-7', label: 'Link of YouTube Video of the Inspection of School Covering the Infrastructure', value: 'Available on request' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Page Header */}
      <header className="bg-[#1E3A8A] py-16 lg:py-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Mandatory <span className="text-[#F59E0B]">Disclosure</span>
          </h1>
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base font-medium">
            <Link to="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#F59E0B]" aria-current="page">Mandatory Disclosure</span>
          </nav>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-4 lg:px-8 max-w-5xl mt-12">
        <p className="text-center text-gray-600 mb-12 text-lg">
          As per the guidelines of the education board, the following information and documents are hereby disclosed for public transparency.
        </p>

        {/* Section A: General Information */}
        <section className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
            <Info className="text-[#F59E0B]" size={24} aria-hidden="true" />
            <h2 className="text-2xl font-bold text-[#1E3A8A]">A. General Information</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {generalInfo.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <th scope="row" className="py-4 px-4 font-semibold text-gray-700 w-1/3 bg-gray-50/50">{item.label}</th>
                    <td className="py-4 px-4 text-gray-600 font-medium">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section B: Documents & Information */}
        <section className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
            <FileText className="text-[#F59E0B]" size={24} aria-hidden="true" />
            <h2 className="text-2xl font-bold text-[#1E3A8A]">B. Documents & Information</h2>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {documentsInfo.map((doc) => (
                <div key={doc.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-[#1E3A8A]/30 hover:shadow-sm transition-all bg-gray-50/50 gap-4">
                  <div className="flex items-start gap-3">
                    <FileText className="text-gray-400 mt-1 flex-shrink-0" size={20} aria-hidden="true" />
                    <span className="text-gray-700 font-medium">{doc.title}</span>
                  </div>
                  <a 
                    href={doc.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View PDF for ${doc.title}`}
                    className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-[#1E3A8A] px-4 py-2 rounded-lg hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-colors flex-shrink-0 text-sm font-bold shadow-sm"
                  >
                    <Download size={16} aria-hidden="true" />
                    View PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: Staff (Teaching) */}
        <section className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
            <Users className="text-[#F59E0B]" size={24} aria-hidden="true" />
            <h2 className="text-2xl font-bold text-[#1E3A8A]">C. Staff (Teaching)</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {staffInfo.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <th scope="row" className="py-4 px-4 font-semibold text-gray-700 w-1/2 md:w-1/3 bg-gray-50/50">{item.label}</th>
                    <td className="py-4 px-4 text-gray-600 font-medium">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section D: School Infrastructure */}
        <section className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
            <Building className="text-[#F59E0B]" size={24} aria-hidden="true" />
            <h2 className="text-2xl font-bold text-[#1E3A8A]">D. School Infrastructure</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {infrastructureInfo.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <th scope="row" className="py-4 px-4 font-semibold text-gray-700 w-1/2 md:w-1/3 bg-gray-50/50">{item.label}</th>
                    <td className="py-4 px-4 text-gray-600 font-medium">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}

export default MandatoryDisclosure;
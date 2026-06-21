import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Info, Users, Building, BookOpen } from 'lucide-react';

function MandatoryDisclosure() {
  // Data arrays for clean mapping
  const generalInfo = [
    { label: 'Name of the School', value: 'Oxford Public School' },
    { label: 'Affiliation No. (If applicable)', value: '2130000' },
    { label: 'School Code (If applicable)', value: '70000' },
    { label: 'Complete Address with Pin Code', value: 'Raskoopa Bahadurpur, Kanth, Shahjahanpur, U.P. Pin-242223' },
    { label: 'Principal Name & Qualification', value: 'Mr. John Doe (M.A., B.Ed)' },
    { label: 'School Email ID', value: 'info@opsspn.in' },
    { label: 'Contact Details (Landline/Mobile)', value: '+91 9415847324' },
  ];

  const documentsInfo = [
    { title: 'Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation', link: '#' },
    { title: 'Copies of Societies/Trust/Company Registration/Renewal Certificate', link: '#' },
    { title: 'Copy of No Objection Certificate (NOC) Issued by State Govt./UT', link: '#' },
    { title: 'Copies of Recognition Certificate Under RTE Act, 2009', link: '#' },
    { title: 'Copy of Valid Building Safety Certificate as per the National Building Code', link: '#' },
    { title: 'Copy of Valid Fire Safety Certificate Issued by the Competent Authority', link: '#' },
    { title: 'Copy of the DEO Certificate Submitted by the School for Affiliation', link: '#' },
    { title: 'Copies of Valid Water, Health and Sanitation Certificates', link: '#' },
  ];

  const staffInfo = [
    { label: 'Principal', value: '1' },
    { label: 'Total No. of Teachers', value: '45' },
    { label: 'PGT', value: '12' },
    { label: 'TGT', value: '18' },
    { label: 'PRT', value: '15' },
    { label: 'Teachers Section Ratio', value: '1:1.5' },
    { label: 'Details of Special Educator', value: '1' },
    { label: 'Details of Counsellor and Wellness Teacher', value: '1' },
  ];

  const infrastructureInfo = [
    { label: 'Total Campus Area of the School (in Sq Mtr)', value: '8000 Sq. Mtr.' },
    { label: 'No. and Size of the Class Rooms (in Sq Mtr)', value: '40 (Approx 46 Sq. Mtr. each)' },
    { label: 'No. and Size of Laboratories including Computer Labs (in Sq Mtr)', value: '4 (Approx 55 Sq. Mtr. each)' },
    { label: 'Internet Facility', value: 'Yes (Broadband/Wi-Fi)' },
    { label: 'No. of Girls Toilets', value: '15' },
    { label: 'No. of Boys Toilets', value: '15' },
    { label: 'Link of YouTube Video of the Inspection of School Covering the Infrastructure', value: 'Available on request' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Page Header */}
      <div className="bg-[#1E3A8A] py-16 lg:py-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Mandatory <span className="text-[#F59E0B]">Disclosure</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base font-medium">
            <Link to="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F59E0B]">Mandatory Disclosure</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl mt-12">
        <p className="text-center text-gray-600 mb-12 text-lg">
          As per the guidelines of the education board, the following information and documents are hereby disclosed for public transparency.
        </p>

        {/* Section A: General Information */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
            <Info className="text-[#F59E0B]" size={24} />
            <h2 className="text-2xl font-bold text-[#1E3A8A]">A. General Information</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {generalInfo.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <th className="py-4 px-4 font-semibold text-gray-700 w-1/3 bg-gray-50/50">{item.label}</th>
                    <td className="py-4 px-4 text-gray-600 font-medium">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section B: Documents & Information */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
            <FileText className="text-[#F59E0B]" size={24} />
            <h2 className="text-2xl font-bold text-[#1E3A8A]">B. Documents & Information</h2>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {documentsInfo.map((doc, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-[#1E3A8A]/30 hover:shadow-sm transition-all bg-gray-50/50 gap-4">
                  <div className="flex items-start gap-3">
                    <FileText className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{doc.title}</span>
                  </div>
                  <a 
                    href={doc.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-[#1E3A8A] px-4 py-2 rounded-lg hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-colors flex-shrink-0 text-sm font-bold shadow-sm"
                  >
                    <Download size={16} />
                    View PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section C: Staff (Teaching) */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
            <Users className="text-[#F59E0B]" size={24} />
            <h2 className="text-2xl font-bold text-[#1E3A8A]">C. Staff (Teaching)</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {staffInfo.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <th className="py-4 px-4 font-semibold text-gray-700 w-1/2 md:w-1/3 bg-gray-50/50">{item.label}</th>
                    <td className="py-4 px-4 text-gray-600 font-medium">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section D: School Infrastructure */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
            <Building className="text-[#F59E0B]" size={24} />
            <h2 className="text-2xl font-bold text-[#1E3A8A]">D. School Infrastructure</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {infrastructureInfo.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <th className="py-4 px-4 font-semibold text-gray-700 w-1/2 md:w-1/3 bg-gray-50/50">{item.label}</th>
                    <td className="py-4 px-4 text-gray-600 font-medium">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MandatoryDisclosure;
import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Student, Intervention, InterventionType } from '../types';
import { Search, Plus, User, Phone, BrainCircuit, X, History, Save } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Students: React.FC = () => {
  const { t } = useLanguage();
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [interventions, setInterventions] = useState<Intervention[]>([]);
  
  // Modal states
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isAddInterventionOpen, setIsAddInterventionOpen] = useState(false);

  // Load data
  const refreshStudents = async () => {
    const data = await api.getItems<Student>('students');
    setStudents(data);
  };

  useEffect(() => {
    refreshStudents();
  }, []);

  useEffect(() => {
    if (selectedStudent && selectedStudent.id) {
      loadInterventions(selectedStudent.id);
    }
  }, [selectedStudent]);

  const loadInterventions = async (studentId: string) => {
    const all = await api.getItems<Intervention>('interventions');
    setInterventions(all.filter(i => i.studentId === studentId).sort((a, b) => b.date - a.date));
  };

  const filteredStudents = students.filter(s => 
    `${s.firstName} ${s.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    s.group.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    await api.addItem<Student>('students', {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      group: formData.get('group') as string,
      contactInfo: formData.get('contactInfo') as string,
      specialNeeds: (formData.get('specialNeeds') as string).split(',').map(s => s.trim()).filter(Boolean),
      createdAt: Date.now()
    });
    
    setIsAddStudentOpen(false);
    refreshStudents();
  };

  const handleAddIntervention = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent || !selectedStudent.id) return;
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    await api.addItem<Intervention>('interventions', {
      studentId: selectedStudent.id,
      studentName: `${selectedStudent.firstName} ${selectedStudent.lastName}`,
      type: formData.get('type') as InterventionType,
      description: formData.get('description') as string,
      status: 'pendiente',
      date: Date.now()
    });

    setIsAddInterventionOpen(false);
    loadInterventions(selectedStudent.id);
  };

  const toggleStatus = async (intervention: Intervention) => {
    if (!intervention.id) return;
    const newStatus = intervention.status === 'pendiente' ? 'resuelto' : 'pendiente';
    await api.updateItem('interventions', intervention.id, { status: newStatus });
    if (selectedStudent?.id) loadInterventions(selectedStudent.id);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)]">
      {/* List Section */}
      <div className={`w-full md:w-1/3 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col ${selectedStudent ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-4 border-b border-slate-100 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-slate-800">{t.students.title}</h2>
            <button onClick={() => setIsAddStudentOpen(true)} className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100">
              <Plus size={20} />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder={t.students.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredStudents.map(student => (
            <div 
              key={student.id}
              onClick={() => setSelectedStudent(student)}
              className={`p-4 border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition ${selectedStudent?.id === student.id ? 'bg-indigo-50 border-l-4 border-l-indigo-500' : ''}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-slate-800">{student.firstName} {student.lastName}</h3>
                  <p className="text-xs text-slate-500">{student.group}</p>
                </div>
                {student.specialNeeds.length > 0 && (
                  <BrainCircuit size={16} className="text-amber-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Section */}
      <div className={`flex-1 md:ml-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col ${!selectedStudent ? 'hidden md:flex' : 'flex'}`}>
        {selectedStudent ? (
          <>
            <div className="p-6 border-b border-slate-100 flex justify-between items-start">
              <div>
                <button onClick={() => setSelectedStudent(null)} className="md:hidden text-slate-500 mb-2 text-sm flex items-center">
                   ← {t.students.back}
                </button>
                <h2 className="text-2xl font-bold text-slate-900">{selectedStudent.firstName} {selectedStudent.lastName}</h2>
                <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">{selectedStudent.group}</span>
                  <span className="flex items-center"><Phone size={14} className="mr-1" /> {selectedStudent.contactInfo}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedStudent.specialNeeds.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full border border-amber-200">{tag}</span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setIsAddInterventionOpen(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 flex items-center"
              >
                <Plus size={16} className="mr-2" /> {t.students.addIntervention}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center">
                <History size={16} className="mr-2" /> {t.students.history}
              </h3>
              
              <div className="space-y-4">
                {interventions.length === 0 && <p className="text-slate-400 italic text-sm">{t.students.noRecords}</p>}
                
                {interventions.map(inter => (
                  <div key={inter.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm relative group">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider
                        ${inter.type === 'Conducta' ? 'bg-red-100 text-red-700' : 
                          inter.type === 'Positivo' ? 'bg-green-100 text-green-700' : 
                          inter.type === 'Académico' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}
                      `}>
                        {t.students.types[inter.type] || inter.type}
                      </span>
                      <span className="text-xs text-slate-400">{new Date(inter.date).toLocaleString()}</span>
                    </div>
                    <p className="text-slate-700 mb-3">{inter.description}</p>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => toggleStatus(inter)}
                        className={`text-xs px-3 py-1 rounded-full border transition
                          ${inter.status === 'resuelto' 
                            ? 'bg-green-50 text-green-600 border-green-200' 
                            : 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-green-50 hover:text-green-600 hover:border-green-200'}
                        `}
                      >
                        {inter.status === 'resuelto' ? t.students.status.resolved : t.students.status.markResolved}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
            <User size={64} className="mb-4 text-slate-200" />
            <p>{t.students.selectPrompt}</p>
          </div>
        )}
      </div>

      {/* Add Student Modal */}
      {isAddStudentOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">{t.students.newStudent}</h3>
              <button onClick={() => setIsAddStudentOpen(false)}><X className="text-slate-400" /></button>
            </div>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required name="firstName" placeholder={t.students.forms.firstName} className="p-2 border rounded w-full" />
                <input required name="lastName" placeholder={t.students.forms.lastName} className="p-2 border rounded w-full" />
              </div>
              <input required name="group" placeholder={t.students.forms.group} className="p-2 border rounded w-full" />
              <input name="contactInfo" placeholder={t.students.forms.contact} className="p-2 border rounded w-full" />
              <input name="specialNeeds" placeholder={t.students.forms.tags} className="p-2 border rounded w-full" />
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-medium hover:bg-indigo-700">{t.students.forms.saveStudent}</button>
            </form>
          </div>
        </div>
      )}

      {/* Add Intervention Modal */}
      {isAddInterventionOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">{t.students.addIntervention}</h3>
              <button onClick={() => setIsAddInterventionOpen(false)}><X className="text-slate-400" /></button>
            </div>
            <form onSubmit={handleAddIntervention} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.students.forms.type}</label>
                <select name="type" className="w-full p-2 border rounded bg-white">
                  <option value="Conducta">{t.students.types.Conducta}</option>
                  <option value="Académico">{t.students.types.Académico}</option>
                  <option value="Familia">{t.students.types.Familia}</option>
                  <option value="Positivo">{t.students.types.Positivo}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.students.forms.description}</label>
                <textarea required name="description" rows={4} className="w-full p-2 border rounded" placeholder={t.students.forms.descPlaceholder} />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-medium hover:bg-indigo-700">{t.students.forms.saveRecord}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
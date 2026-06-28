const stages = [
  { id: 1, key: 'checklist', name: 'Checklist', color: '#3976f6', soft: '#e8f0ff' },
  { id: 2, key: 'initial', name: 'Initial Review', color: '#f0782c', soft: '#fff0e6' },
  { id: 3, key: 'recheck', name: 'Recheck', color: '#7c5cf2', soft: '#f0ecff' },
  { id: 4, key: 'processing', name: 'File Processing', color: '#18a8c5', soft: '#e6f8fb' },
  { id: 5, key: 'prefill', name: 'Form Prefill', color: '#f3a51d', soft: '#fff4dc' },
  { id: 6, key: 'submission', name: 'Submission Draft', color: '#ef5f5f', soft: '#ffebeb' },
  { id: 7, key: 'lawyer', name: 'Lawyer Review', color: '#0f9b8e', soft: '#e3f6f4' }
];

const enquiries = [
  {
    id: 'E-250628-007', client: 'Sun Yue', visa: 'Not sure yet', stage: 0, owner: 'Sarah', risk: 'Low', next: 'Send profile form link', updated: '5m ago', review: false, blocked: false, completed: false,
    facts: ['New WeChat enquiry', 'No form sent', 'Chinese client'],
    enquiryStage: 'form-link',
    formLink: 'client-intake-form-v2.html?enquiry=E-250628-007',
    formSentAt: '',
    formOpened: false,
    formOpenedAt: '',
    intake: { source: 'WeChat enquiry', channel: 'WeChat', form: 'Not sent', meeting: 'Not booked', strategy: 'Not prepared', quote: 'Pending', budget: 'Unknown', urgency: 'Normal', lawyer: 'Helen Wang' },
    submittedProfile: null,
    strategyDraft: null,
    meeting: null,
    agents: [],
    done: ['Initial enquiry captured'],
    issues: [['Profile required', 'Client needs to complete the Chinese personal information form before assessment.']]
  },
  {
    id: 'E-250628-006', client: 'Zhang Min', visa: '188 Business Innovation', stage: 0, owner: 'Sarah', risk: 'Medium', next: 'Waiting for profile form', updated: '12m ago', review: false, blocked: false, completed: false,
    facts: ['Chinese client', 'WeChat preferred', 'Profile form pending'],
    enquiryStage: 'waiting-form',
    formLink: 'client-intake-form-v2.html?enquiry=E-250628-006',
    formSentAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    formOpened: false,
    formOpenedAt: '',
    intake: { source: 'WeChat enquiry', channel: 'WeChat', form: 'Sent 6h ago', meeting: 'Not booked', strategy: 'Not prepared', quote: 'Pending', budget: '$8k-$12k', urgency: 'High', lawyer: 'Helen Wang' },
    submittedProfile: null,
    strategyDraft: null,
    meeting: null,
    agents: [],
    done: ['Lead captured from WeChat', 'Visa interest classified', 'Chinese intake form sent'],
    issues: [['Waiting for client', 'The form link has not been opened yet. Follow up if there is no response after 24 hours.']]
  },
  {
    id: 'E-250628-005', client: 'Chen Rui', visa: '190 Skilled Nominated', stage: 0, owner: 'Sarah', risk: 'Medium', next: 'Senior lawyer strategy', updated: '21m ago', review: true, blocked: false, completed: false,
    facts: ['Form returned', 'Skills pathway', 'Lawyer strategy required'],
    enquiryStage: 'form-returned',
    formLink: 'client-intake-form-v2.html?enquiry=E-250628-005',
    formSentAt: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    formOpened: true,
    formOpenedAt: new Date(Date.now() - 28 * 60 * 60 * 1000).toISOString(),
    intake: { source: 'Email enquiry', channel: 'Email', form: 'Complete', meeting: 'Not booked', strategy: 'Not prepared', quote: 'Pending', budget: '$5k-$7k', urgency: 'Normal', lawyer: 'Helen Wang' },
    submittedProfile: {
      chineseName: '陈瑞', englishName: 'Ray Chen', phone: '+61 401 236 889', email: 'ray.chen@example.com', currentVisa: '485 expiring Dec 2026', location: 'Brisbane', family: 'Single', background: 'ICT occupation, ACS assessment pending, interested in 190/491 pathway', preferredLanguage: 'Mandarin'
    },
    strategyDraft: null,
    meeting: null,
    agents: [],
    done: ['Profile form received', 'Visa interest confirmed', 'Key facts extracted'],
    issues: [['Lawyer strategy needed', 'Need senior lawyer to decide whether 190 or 491 is more realistic.']]
  },
  {
    id: 'E-250628-004', client: 'Liu Fang', visa: '500 Student Visa', stage: 0, owner: 'Sarah', risk: 'Low', next: 'Book meeting', updated: '28m ago', review: false, blocked: false, completed: false,
    facts: ['Email enquiry', 'Form complete', 'Strategy ready'],
    enquiryStage: 'strategy-ready',
    formLink: 'client-intake-form-v2.html?enquiry=E-250628-004',
    formSentAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    formOpened: true,
    formOpenedAt: new Date(Date.now() - 38 * 60 * 60 * 1000).toISOString(),
    intake: { source: 'Email enquiry', channel: 'Email', form: 'Complete', meeting: 'Suggested times sent', strategy: 'Draft pathway ready', quote: 'Pending meeting', budget: '$2.8k-$4k', urgency: 'Normal', lawyer: 'Helen Wang' },
    submittedProfile: {
      chineseName: '刘芳', englishName: 'Fiona Liu', phone: '+61 412 888 210', email: 'fiona.liu@example.com', currentVisa: 'Subclass 500 expiring Aug 2026', location: 'Melbourne', family: 'Single', background: 'Completed foundation program, applying for bachelor pathway', preferredLanguage: 'Mandarin'
    },
    strategyDraft: { pathway: 'Student visa extension with updated CoE and financial evidence', keyRisk: 'Genuine student narrative needs senior lawyer check', quote: '$3,600 professional fee + government charges', preparedBy: 'Helen Wang' },
    meeting: null,
    agents: [],
    done: ['Profile form received', 'Basic eligibility summary created', 'Strategy and quote prepared'],
    issues: []
  },
  {
    id: 'E-250628-003', client: 'Wang Hao', visa: 'Partner Visa 820', stage: 0, owner: 'David', risk: 'Medium', next: 'Meeting confirmed', updated: '42m ago', review: true, blocked: false, completed: false,
    facts: ['WeChat enquiry', 'Meeting booked', 'Evidence unclear'],
    enquiryStage: 'meeting-booked',
    formLink: 'client-intake-form-v2.html?enquiry=E-250628-003',
    formSentAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    formOpened: true,
    formOpenedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    intake: { source: 'WeChat referral', channel: 'WeChat + Email', form: 'Complete', meeting: 'Tomorrow 10:30 AM', strategy: 'Ready', quote: 'Prepared', budget: '$7k-$9k', urgency: 'Normal', lawyer: 'Helen Wang' },
    submittedProfile: {
      chineseName: '王浩', englishName: 'Harry Wang', phone: '+61 433 219 876', email: 'harry.wang@example.com', currentVisa: 'Bridging Visa A', location: 'Sydney', family: 'Partner included', background: 'Partner relationship evidence and timeline submitted', preferredLanguage: 'Mandarin'
    },
    strategyDraft: { pathway: 'Partner visa 820/801 with relationship evidence repair plan', keyRisk: 'Long separation period requires careful explanation before advice', quote: '$8,500 professional fee + government charges', preparedBy: 'Helen Wang' },
    meeting: { date: '2026-06-29', time: '10:30', location: 'Zoom', attendees: 'Helen Wang, David, Wang Hao', inviteStatus: 'Accepted' },
    agents: [],
    done: ['Client profile form received', 'Meeting booked', 'Relationship timeline extracted'],
    issues: [['Relationship evidence unclear', 'Timeline has a long separation period that needs senior lawyer view before advice.']]
  },
  {
    id: 'E-250628-002', client: 'Guo Lin', visa: '482 Employer Sponsored', stage: 0, owner: 'David', risk: 'High', next: 'Record client decision', updated: '1h ago', review: true, blocked: false, completed: false,
    facts: ['Meeting finished', 'Decision pending', 'Employer sponsor'],
    enquiryStage: 'meeting-completed',
    formLink: 'client-intake-form-v2.html?enquiry=E-250628-002',
    formSentAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    formOpened: true,
    formOpenedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(),
    intake: { source: 'Phone enquiry', channel: 'Phone + Email', form: 'Complete', meeting: 'Completed today', strategy: 'Presented', quote: '$6,800', budget: '$6k-$8k', urgency: 'High', lawyer: 'Helen Wang' },
    submittedProfile: {
      chineseName: '郭林', englishName: 'Lincoln Guo', phone: '+61 422 331 908', email: 'lincoln.guo@example.com', currentVisa: '482 pathway enquiry, offshore', location: 'Shanghai', family: 'Spouse and one child', background: 'Employer wants to sponsor candidate for restaurant manager role', preferredLanguage: 'Mandarin'
    },
    strategyDraft: { pathway: '482 employer sponsored pathway with sponsor readiness check', keyRisk: 'Employer must confirm nomination position and salary evidence', quote: '$6,800 professional fee + government charges', preparedBy: 'Helen Wang' },
    meeting: { date: '2026-06-28', time: '14:00', location: 'Office meeting room 2', attendees: 'Helen Wang, David, Guo Lin, Employer representative', inviteStatus: 'Completed' },
    agents: [],
    done: ['Consultation completed', 'Strategy explained', 'Quote discussed'],
    issues: [['Client decision required', 'Client needs to confirm whether to proceed and provide employer contact details.']]
  },
  {
    id: 'E-250628-001', client: 'Tang Mei', visa: '491 State Nomination', stage: 0, owner: 'Sarah', risk: 'Low', next: 'Ready for case management', updated: '2h ago', review: false, blocked: false, completed: true,
    facts: ['Accepted quote', 'Ready to convert', 'Final details needed'],
    enquiryStage: 'converted',
    formLink: 'client-intake-form-v2.html?enquiry=E-250628-001',
    formSentAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    formOpened: true,
    formOpenedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    intake: { source: 'Referral', channel: 'WeChat + Email', form: 'Complete', meeting: 'Accepted after meeting', strategy: 'Accepted', quote: '$5,900', budget: '$5k-$6k', urgency: 'Normal', lawyer: 'Helen Wang' },
    submittedProfile: {
      chineseName: '唐美', englishName: 'May Tang', phone: '+61 455 104 332', email: 'may.tang@example.com', currentVisa: '485 expiring Jan 2027', location: 'Adelaide', family: 'Single', background: 'Regional graduate with positive skills assessment and SA interest', preferredLanguage: 'Mandarin'
    },
    strategyDraft: { pathway: '491 state nomination pathway with SA document checklist', keyRisk: 'Need updated employment evidence before lodgement', quote: '$5,900 professional fee + government charges', preparedBy: 'Helen Wang' },
    meeting: { date: '2026-06-27', time: '11:00', location: 'Zoom', attendees: 'Helen Wang, Sarah, Tang Mei', inviteStatus: 'Completed' },
    agents: [],
    done: ['Client accepted proposal', 'Professional fee confirmed', 'Ready to open active case'],
    issues: [['Confirm final case details', 'Before converting, confirm visa pathway, price, client identity and responsible lawyer.']]
  }
];

const savedEnquiries = JSON.parse(localStorage.getItem('jtLawyersCustomEnquiriesV2') || '[]');
enquiries.unshift(...savedEnquiries);

const cases = [
  {
    id: 'C-250627-001', client: 'Chen Family', visa: '189 PR', stage: 2, owner: 'Emily', risk: 'High', next: 'Lawyer Review', updated: '1h ago', review: true, blocked: false, completed: false,
    facts: ['Passport risk', 'Not lodged', 'Remeo'],
    agents: [
      ['Emily', 'Reviewing employment evidence against 189 checklist', 'Working', 65],
      ['David', 'Verifying bank statements and identity records', 'Working', 40],
      ['Mia', 'Preparing legal submission draft notes', 'Queued', 0]
    ],
    done: ['Document collection check completed', 'Identity documents verified', 'Skills assessment verified'],
    issues: [
      ['Employment gap explanation', 'AI flagged inconsistency in work timeline'],
      ['Income evidence variance', 'Different figures in payslips vs tax return']
    ]
  },
  {
    id: 'C-250626-015', client: 'Li Wei', visa: '190 Skilled Nominated', stage: 1, owner: 'David', risk: 'Medium', next: 'Client Upload', updated: '2h ago', review: false, blocked: true, completed: false,
    facts: ['Missing docs', 'Client upload', 'David'],
    agents: [['David', 'Waiting for police check and translated hukou copy', 'Waiting', 30], ['Emily', 'Checklist prepared for second upload', 'Done', 100]],
    done: ['State nomination checklist generated', 'Missing document request drafted'],
    issues: [['Police check outstanding', 'Client has not uploaded current certificate']]
  },
  {
    id: 'C-250625-009', client: 'Nguyen Thi', visa: '491 State Nomination', stage: 3, owner: 'Emily', risk: 'Low', next: 'Verify Income', updated: '3h ago', review: false, blocked: false, completed: false,
    facts: ['Recheck', 'Not lodged', 'Emily'],
    agents: [['Emily', 'Second pass check of corrected income evidence', 'Working', 78], ['David', 'Confirming employer contact details', 'Done', 100]],
    done: ['Initial defects resolved', 'Client re-upload confirmed'],
    issues: []
  },
  {
    id: 'C-250624-021', client: 'Patel Family', visa: '500 Student Visa', stage: 4, owner: 'Olivia', risk: 'Medium', next: 'Process Docs', updated: '4h ago', review: false, blocked: false, completed: false,
    facts: ['Formatting', 'Not lodged', 'Olivia'],
    agents: [['Olivia', 'Compressing and renaming documents for Immi upload', 'Working', 72], ['David', 'Checking CoE and OSHC validity', 'Working', 55]],
    done: ['GTE evidence grouped', 'Financial capacity folder sorted'],
    issues: [['OSHC date check', 'Policy end date may not cover full stay period']]
  },
  {
    id: 'C-250623-017', client: 'Sharma Rohit', visa: '485 Temporary Skill', stage: 5, owner: 'David', risk: 'Low', next: 'Confirm Details', updated: '5h ago', review: false, blocked: false, completed: false,
    facts: ['Form prefill', 'Draft only', 'David'],
    agents: [['David', 'Matching personal details into draft application form', 'Working', 88], ['Emily', 'Cross-checking passport and qualification fields', 'Done', 100]],
    done: ['Personal details extracted', 'Qualification history matched'],
    issues: []
  },
  {
    id: 'C-250622-011', client: 'Wang Lei', visa: '186 ENS', stage: 6, owner: 'Mia', risk: 'High', next: 'Draft Submission', updated: '6h ago', review: true, blocked: false, completed: false,
    facts: ['Submission', 'Lawyer review', 'Mia'],
    agents: [['Mia', 'Drafting submission using prior successful ENS template', 'Working', 52], ['Emily', 'Checking evidence against nomination criteria', 'Working', 61]],
    done: ['Employer nomination file indexed', 'Role description extracted'],
    issues: [['Duties alignment', 'Position duties need lawyer view before submission draft continues']]
  },
  {
    id: 'C-250621-013', client: 'Garcia Family', visa: '189 PR', stage: 2, owner: 'Emily', risk: 'Medium', next: 'Lawyer Review', updated: '1d ago', review: true, blocked: false, completed: false,
    facts: ['Initial review', 'Not lodged', 'Emily'],
    agents: [['Emily', 'Reviewing employment references and payslips', 'Working', 47], ['David', 'Preparing client clarification request', 'Queued', 0]],
    done: ['Passport and identity set checked'],
    issues: [['Reference letter format', 'Employer letter missing direct supervisor contact details']]
  },
  {
    id: 'C-250620-008', client: 'Kumar Anil', visa: '190 Regional', stage: 1, owner: 'David', risk: 'Low', next: 'Client Upload', updated: '1d ago', review: false, blocked: true, completed: false,
    facts: ['Checklist', 'Client upload', 'David'],
    agents: [['David', 'Sending revised checklist for regional nomination evidence', 'Working', 35]],
    done: ['Visa-specific checklist generated'],
    issues: []
  },
  {
    id: 'C-250619-004', client: 'Okonkwo Ada', visa: '482 Sponsor', stage: 7, owner: 'Mia', risk: 'Low', next: 'Ready for Review', updated: '2d ago', review: false, blocked: false, completed: true,
    facts: ['Ready', 'Draft complete', 'Mia'],
    agents: [['Mia', 'Submission draft completed for lawyer final review', 'Done', 100]],
    done: ['Submission draft completed', 'Evidence bundle indexed', 'Form summary prepared'],
    issues: []
  }
];

const savedCases = JSON.parse(localStorage.getItem('jtLawyersCustomCasesV2') || '[]');
cases.unshift(...savedCases);

let selectedCaseId = cases[0].id;
let activeFilter = 'all';
let searchTerm = '';
let enquirySearchTerm = '';
let activeStage = null;
let instructions = JSON.parse(localStorage.getItem('jtLawyersCaseInstructionsV2') || '{}');
let knowledgeRules = JSON.parse(localStorage.getItem('jtLawyersKnowledgeRulesV2') || '[]');
let pendingKbRule = null;

const stageRail = document.getElementById('stageRail');
const rowsEl = document.getElementById('caseRows');
const detailEl = document.getElementById('detailContent');
const searchEl = document.getElementById('caseSearch');
const officeShell = document.getElementById('officeShell');
const detailToggle = document.getElementById('detailToggle');
const dashboardView = document.getElementById('dashboardView');
const casesView = document.getElementById('casesView');
const lawyerIssueList = document.getElementById('lawyerIssueList');
const dashboardEnquiryMetrics = document.getElementById('dashboardEnquiryMetrics');
const dashboardCaseMetrics = document.getElementById('dashboardCaseMetrics');
const dashboardAgentStatus = document.getElementById('dashboardAgentStatus');
const knowledgeView = document.getElementById('knowledgeView');
const enquiriesView = document.getElementById('enquiriesView');
const enquiryRows = document.getElementById('enquiryRows');
const enquirySearchEl = document.getElementById('enquirySearch');
const enquiryPanel = document.getElementById('enquiryPanel');
const enquiryInfoToggle = document.getElementById('enquiryInfoToggle');
const newEnquiryButton = document.getElementById('newEnquiryButton');
const newEnquiryModal = document.getElementById('newEnquiryModal');
const newEnquiryForm = document.getElementById('newEnquiryForm');
const closeNewEnquiry = document.getElementById('closeNewEnquiry');
const cancelNewEnquiry = document.getElementById('cancelNewEnquiry');
const kbRuleInput = document.getElementById('kbRuleInput');
const kbUnderstanding = document.getElementById('kbUnderstanding');
const kbRuleList = document.getElementById('kbRuleList');
const kbRuleCount = document.getElementById('kbRuleCount');

function stageFor(id) { return stages.find(stage => stage.id === id); }
function riskClass(risk) { return `risk-${risk.toLowerCase()}`; }

function matchesFilter(item) {
  if (activeStage && item.stage !== activeStage) return false;
  if (activeFilter === 'review' && !item.review) return false;
  if (activeFilter === 'risk' && item.risk !== 'High') return false;
  if (activeFilter === 'blocked' && !item.blocked) return false;
  if (activeFilter === 'completed' && !item.completed) return false;
  if (searchTerm) {
    const haystack = [item.client, item.id, item.visa, item.stage, item.owner, item.risk, item.next, ...item.facts].join(' ').toLowerCase();
    if (!haystack.includes(searchTerm)) return false;
  }
  return true;
}

function getSeniorLawyerIssues() {
  const caseIssues = cases.flatMap(item => (item.issues || []).map(issue => ({
    id: item.id,
    client: item.client,
    type: 'Case',
    title: issue[0],
    note: issue[1],
    severity: item.risk,
    action: item.next
  })));
  const enquiryIssues = enquiries.filter(item => item.review || item.enquiryStage === 'form-returned' || item.enquiryStage === 'meeting-completed' || item.enquiryStage === 'converted').flatMap(item => (item.issues || []).map(issue => ({
    id: item.id,
    client: item.client,
    type: 'Enquiry',
    title: issue[0],
    note: issue[1],
    severity: item.risk,
    action: item.next
  })));
  return [...caseIssues, ...enquiryIssues].sort((a, b) => (b.severity === 'High') - (a.severity === 'High'));
}

function renderDashboard() {
  if (!lawyerIssueList) return;
  const issues = getSeniorLawyerIssues();
  lawyerIssueList.innerHTML = issues.slice(0, 5).map(issue => `<button class="lawyer-issue-row" type="button" data-case="${issue.id}">
    <span class="issue-severity ${riskClass(issue.severity)}">${issue.severity}</span>
    <div><strong>${issue.client}</strong><small>${issue.type} · ${issue.title}</small></div>
    <em>${issue.action}</em>
  </button>`).join('') || '<div class="empty-state compact-empty">No senior lawyer blockers right now.</div>';

  const waitingForms = enquiries.filter(item => item.enquiryStage === 'waiting-form').length;
  const strategyNeeded = enquiries.filter(item => item.enquiryStage === 'form-returned').length;
  const meetingPending = enquiries.filter(item => item.enquiryStage === 'strategy-ready').length;
  const convertReady = enquiries.filter(item => item.enquiryStage === 'converted').length;
  dashboardEnquiryMetrics.innerHTML = [
    ['Open enquiries', enquiries.length, 'enquiries'],
    ['Waiting forms', waitingForms, 'enquiries'],
    ['Need strategy', strategyNeeded, 'enquiries'],
    ['Ready to convert', convertReady, 'enquiries']
  ].map(metric => `<button type="button" data-dashboard-nav="${metric[2]}"><strong>${metric[1]}</strong><small>${metric[0]}</small></button>`).join('');

  const reviewCases = cases.filter(item => item.review).length;
  const blockedCases = cases.filter(item => item.blocked).length;
  const highRiskCases = cases.filter(item => item.risk === 'High').length;
  dashboardCaseMetrics.innerHTML = [
    ['Active cases', cases.length, 'cases'],
    ['Need lawyer review', reviewCases, 'case-review'],
    ['Blocked', blockedCases, 'case-blocked'],
    ['High risk', highRiskCases, 'case-risk']
  ].map(metric => `<button type="button" data-dashboard-nav="${metric[2]}"><strong>${metric[1]}</strong><small>${metric[0]}</small></button>`).join('');

  const allAgentWork = cases.flatMap(item => item.agents.map(agent => ({ name: agent[0], task: agent[1], status: agent[2], progress: agent[3], client: item.client })));
  const agentNames = ['Emily', 'David', 'Mia', 'Sarah', 'Olivia'];
  dashboardAgentStatus.innerHTML = agentNames.map(name => {
    const jobs = allAgentWork.filter(job => job.name === name);
    const current = jobs.find(job => job.status === 'Working') || jobs[0];
    const status = current ? current.status : 'Available';
    const task = current ? `${current.client}: ${current.task}` : 'No active blocker';
    const progress = current ? current.progress : 0;
    return `<div class="ai-status-row">
      <span class="agent-dot ${name.toLowerCase()}">${name[0]}</span>
      <div><strong>${name}</strong><small>${task}</small></div>
      <em>${status}</em>
      <div class="mini-progress"><span style="width:${progress}%"></span></div>
    </div>`;
  }).join('');
}

function renderStages() {
  stageRail.innerHTML = stages.map(stage => {
    const count = cases.filter(item => item.stage === stage.id).length;
    const active = activeStage === stage.id ? ' active' : '';
    return `<button class="stage-card${active}" type="button" data-stage="${stage.id}" style="--stage:${stage.color};--stage-soft:${stage.soft}">
      <span class="stage-num">${stage.id}</span>
      <span class="stage-name">${stage.name}</span>
      <span class="stage-count">${count}</span>
      <span class="stage-bar"></span>
    </button>`;
  }).join('');
}

function renderSummary() {
  document.getElementById('totalCases').textContent = cases.length;
  document.getElementById('reviewCases').textContent = cases.filter(item => item.review).length;
  document.getElementById('riskCases').textContent = cases.filter(item => item.risk === 'High').length;
  document.getElementById('completedCases').textContent = cases.filter(item => item.completed).length;
}

function renderRows() {
  const filtered = cases.filter(matchesFilter);
  if (!filtered.length) {
    rowsEl.innerHTML = '<div class="empty-state">No cases match the current search or filter.</div>';
    return;
  }
  rowsEl.innerHTML = filtered.map(item => {
    const stage = stageFor(item.stage);
    const active = item.id === selectedCaseId ? ' active' : '';
    return `<div class="case-row${active}" role="row" data-case="${item.id}">
      <div><div class="client-name">${item.client}</div><div class="case-id">${item.id}</div></div>
      <div>${item.visa}</div>
      <div><span class="stage-pill" style="--stage:${stage.color};--stage-soft:${stage.soft}">${stage.id} ${stage.name}</span></div>
      <div><span class="owner-pill">${item.owner}</span></div>
      <div><span class="risk-pill ${riskClass(item.risk)}">${item.risk}</span></div>
      <div><span class="action-pill">${item.next}</span></div>
      <div class="updated">${item.updated}</div>
    </div>`;
  }).join('');
}

function findSelectedItem() {
  return [...cases, ...enquiries].find(entry => entry.id === selectedCaseId) || cases[0];
}

function elapsedSince(iso) {
  if (!iso) return 'not sent yet';
  const diff = Math.max(0, Date.now() - new Date(iso).getTime());
  const hours = Math.floor(diff / (60 * 60 * 1000));
  if (hours < 24) return `${Math.max(1, hours)}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function enquiryProgress(stage) {
  const steps = [
    ['form-link', 'Send form link'],
    ['waiting-form', 'Waiting for form'],
    ['form-returned', 'Lawyer strategy'],
    ['strategy-ready', 'Book meeting'],
    ['meeting-booked', 'Meeting confirmed'],
    ['meeting-completed', 'Decision'],
    ['accepted-confirmation', 'Confirm details'],
    ['converted', 'Case management']
  ];
  const current = Math.max(0, steps.findIndex(step => step[0] === stage));
  return steps.map((step, index) => `<div class="enquiry-step ${index < current ? 'done' : index === current ? 'current' : 'locked'}">
    <span>${index + 1}</span><strong>${step[1]}</strong>
  </div>`).join('');
}

function profileRows(profile) {
  return Object.entries(profile || {}).map(([key, value]) => {
    const labels = { chineseName: 'Chinese name', englishName: 'English name', phone: 'Phone', email: 'Email', currentVisa: 'Current visa', location: 'Location', family: 'Family', background: 'Background', preferredLanguage: 'Language' };
    return `<div><small>${labels[key] || key}</small><strong>${value}</strong></div>`;
  }).join('');
}

function meetingSummaryText(item) {
  const meeting = item.meeting || {};
  const strategy = item.strategyDraft || {};
  return `您好 ${item.client}，\n\n您的移民咨询会议已经安排好：\n时间：${meeting.date || '待确认'} ${meeting.time || ''}\n地点：${meeting.location || '待确认'}\n参与人员：${meeting.attendees || item.intake.lawyer}\n咨询主题：${item.visa}\n初步方向：${strategy.pathway || '律师将在会议中说明可行方案'}\n\n请在会议前准备：护照、当前签证、相关学历/工作/关系/资金材料。\n\n重要提示：本会议用于咨询和方案说明，不代表已经递交任何签证申请。\n\nJT Lawyers`;
}

function meetingSummaryHtml(item) {
  return meetingSummaryText(item).replaceAll('\\n', '<br>');
}

function renderEnquiryDetail(item) {
  const caseInstructions = instructions[item.id] || [];
  const stage = item.enquiryStage || 'form-link';
  let actionHtml = '';

  if (stage === 'form-link') {
    actionHtml = `<section class="detail-section enquiry-current-step">
      <h3>Current step</h3>
      <div class="step-focus-card">
        <span class="step-kicker">Step 1</span>
        <h4>Send Chinese personal information form</h4>
        <p>The enquiry is captured. Share this secure profile form with the client through WeChat or email.</p>
        <div class="share-link-box"><a href="${item.formLink}" target="_blank" rel="noopener">${item.formLink}</a><button type="button" data-enquiry-action="send-form">Mark as sent</button></div>
      </div>
    </section>`;
  } else if (stage === 'waiting-form') {
    actionHtml = `<section class="detail-section enquiry-current-step">
      <h3>Current step</h3>
      <div class="step-focus-card waiting">
        <span class="step-kicker">Waiting for client</span>
        <h4>Profile form sent ${elapsedSince(item.formSentAt)}</h4>
        <div class="form-link-status">
          <div><small>Form link</small><a class="form-link-anchor" href="${item.formLink}" target="_blank" rel="noopener">${item.formLink}</a></div>
          <div><small>Opened by client</small><strong>${item.formOpened ? `Yes · ${elapsedSince(item.formOpenedAt)}` : 'No'}</strong></div>
        </div>
        <p>JT Lawyers is waiting for the client to complete the profile form. No lawyer action is required yet.</p>
        <button class="item-action primary-action" type="button" data-enquiry-action="receive-form">Demo: mark form received</button>
      </div>
    </section>`;
  } else if (stage === 'form-returned') {
    actionHtml = `<section class="detail-section enquiry-current-step">
      <h3>Current step</h3>
      <div class="step-focus-card">
        <span class="step-kicker">Senior lawyer required</span>
        <h4>Prepare strategy and quote</h4>
        <p>The client information is ready. Senior lawyer should prepare the pathway, risk view and quote. This will not be automatically sent to the client.</p>
        <div class="strategy-box">
          <textarea id="strategyInput" placeholder="Senior lawyer strategy...">Suggested pathway: ${item.visa}. Key risk: confirm eligibility and evidence before advice.</textarea>
          <input id="quoteInput" type="text" value="${item.intake.budget}" aria-label="Quote" />
          <button type="button" data-enquiry-action="save-strategy">Save strategy and quote</button>
        </div>
      </div>
    </section>`;
  } else if (stage === 'strategy-ready') {
    const strategy = item.strategyDraft || {};
    actionHtml = `<section class="detail-section enquiry-current-step">
      <h3>Current step</h3>
      <div class="step-focus-card">
        <span class="step-kicker">Ready to meet</span>
        <h4>Book consultation and send meeting invite</h4>
        <div class="strategy-summary">
          <div><small>Strategy</small><strong>${strategy.pathway || 'Strategy ready for discussion'}</strong></div>
          <div><small>Quote</small><strong>${strategy.quote || item.intake.budget}</strong></div>
          <div><small>Important</small><strong>Not automatically sent to client</strong></div>
        </div>
        <div class="meeting-form">
          <input id="meetingDate" type="date" value="2026-06-30" />
          <input id="meetingTime" type="time" value="10:00" />
          <input id="meetingLocation" type="text" value="Zoom" placeholder="Location" />
          <input id="meetingAttendees" type="text" value="${item.intake.lawyer}, ${item.client}" placeholder="Attendees" />
          <button type="button" data-enquiry-action="send-invite">Send meeting invite</button>
        </div>
      </div>
    </section>`;
  } else if (stage === 'meeting-booked') {
    const meeting = item.meeting || {};
    actionHtml = `<section class="detail-section enquiry-current-step">
      <h3>Current step</h3>
      <div class="step-focus-card">
        <span class="step-kicker">Meeting confirmed</span>
        <h4>${meeting.date || 'Date pending'} · ${meeting.time || ''}</h4>
        <div class="meeting-summary">
          <div><small>Location</small><strong>${meeting.location || 'Not set'}</strong></div>
          <div><small>Attendees</small><strong>${meeting.attendees || 'Not set'}</strong></div>
          <div><small>Client invite</small><strong>${meeting.inviteStatus || 'Summary ready to share'}</strong></div>
        </div>
        <div class="client-share-card">
          <div class="client-share-head">
            <strong>Meeting summary for client</strong>
            <button type="button" data-enquiry-action="copy-meeting-summary">Copy summary</button>
          </div>
          <div class="client-share-text" id="meetingShareText">${meetingSummaryHtml(item)}</div>
        </div>
        <div class="meeting-form compact">
          <input id="meetingDate" type="date" value="${meeting.date || '2026-06-30'}" />
          <input id="meetingTime" type="time" value="${meeting.time || '10:00'}" />
          <input id="meetingLocation" type="text" value="${meeting.location || 'Zoom'}" />
          <input id="meetingAttendees" type="text" value="${meeting.attendees || `${item.intake.lawyer}, ${item.client}`}" />
          <button type="button" data-enquiry-action="update-meeting">Update meeting</button>
        </div>
        <button class="item-action primary-action" type="button" data-enquiry-action="complete-meeting">Demo: meeting finished</button>
      </div>
    </section>`;
  } else if (stage === 'meeting-completed') {
    actionHtml = `<section class="detail-section enquiry-current-step">
      <h3>Current step</h3>
      <div class="step-focus-card">
        <span class="step-kicker">Post meeting decision</span>
        <h4>Did the client accept?</h4>
        <div class="decision-grid decision-choice-grid">
          <button type="button" data-enquiry-action="client-accepted">Accepted · review final details</button>
          <button type="button" data-enquiry-action="client-not-accepted">Not accepted</button>
        </div>
        <div class="decline-box" id="declineBox" hidden>
          <textarea id="declineReason" placeholder="Record why the client did not accept..."></textarea>
          <button type="button" data-enquiry-action="record-decline">Save not accepted reason</button>
        </div>
      </div>
    </section>`;
  } else if (stage === 'accepted-confirmation') {
    const strategy = item.strategyDraft || {};
    actionHtml = `<section class="detail-section enquiry-current-step">
      <h3>Current step</h3>
      <div class="step-focus-card">
        <span class="step-kicker">Accepted</span>
        <h4>Confirm strategy and price before case creation</h4>
        <p>The client accepted after the meeting. Confirm the final pathway, price and responsible lawyer before moving this enquiry into Case Management.</p>
        <div class="final-confirm-form">
          <label>Client<input id="finalClientName" type="text" value="${item.client}" /></label>
          <label>Visa pathway<input id="finalVisaPathway" type="text" value="${item.visa}" /></label>
          <label>Strategy<textarea id="finalStrategy">${strategy.pathway || 'Strategy discussed during consultation'}</textarea></label>
          <label>Final price<input id="finalPrice" type="text" value="${strategy.quote || item.intake.quote || item.intake.budget}" /></label>
          <label>Responsible lawyer<input id="finalLawyer" type="text" value="${item.intake.lawyer}" /></label>
          <label>Internal confirmation note<textarea id="finalNote">Confirm identity, visa pathway, scope of work and professional fee before opening the active case.</textarea></label>
          <button type="button" data-enquiry-action="confirm-create-case">Confirm and create case</button>
        </div>
      </div>
    </section>`;
  } else {
    actionHtml = `<section class="detail-section enquiry-current-step">
      <h3>Current step</h3>
      <div class="step-focus-card">
        <span class="step-kicker">Converted</span>
        <h4>Ready for Case Management</h4>
        <p>Client has accepted. Final strategy and price have been confirmed for case creation.</p>
        <div class="strategy-summary">
          <div><small>Client</small><strong>${item.finalCase?.client || item.client}</strong></div>
          <div><small>Visa</small><strong>${item.finalCase?.visa || item.visa}</strong></div>
          <div><small>Final price</small><strong>${item.finalCase?.price || item.strategyDraft?.quote || item.intake.quote}</strong></div>
          <div><small>Responsible lawyer</small><strong>${item.finalCase?.lawyer || item.intake.lawyer}</strong></div>
        </div>
      </div>
    </section>`;
  }

  detailEl.innerHTML = `<div class="detail-title enquiry-detail-title">
    <h2>${item.client}</h2>
    <div class="detail-id">Prospect ID: ${item.id}</div>
    <div class="active-chip"><span></span>${item.intake.channel}</div>
  </div>

  <div class="case-facts enquiry-facts">
    <div class="fact"><small>Visa interest</small><strong>${item.visa}</strong></div>
    <div class="fact"><small>Source</small><strong>${item.intake.source}</strong></div>
    <div class="fact"><small>Senior lawyer</small><strong>${item.intake.lawyer}</strong></div>
  </div>

  <section class="detail-section enquiry-progress-section">
    <h3>Intake workflow</h3>
    <div class="enquiry-stepper">${enquiryProgress(stage)}</div>
  </section>

  ${actionHtml}

  ${item.submittedProfile ? `<section class="detail-section">
    <h3>Submitted personal information</h3>
    <div class="profile-grid">${profileRows(item.submittedProfile)}</div>
  </section>` : ''}

  <section class="detail-section">
    <h3>Instruction for this enquiry</h3>
    <div class="instruction-box">
      <textarea id="instructionInput" placeholder="Tell the intake team what to do for ${item.client}..."></textarea>
      <div class="send-row"><small>Instruction is saved to this enquiry only</small><button id="sendInstruction" type="button">➜</button></div>
    </div>
    <div class="instruction-list" id="instructionList">
      ${caseInstructions.map(entry => `<div class="instruction-item"><div><div class="item-title">${entry.text}</div><div class="item-note">Owner instruction recorded</div></div><div class="instruction-time">${entry.time}</div></div>`).join('')}
    </div>
  </section>`;
}

function renderCaseDetail(item) {
  const stage = stageFor(item.stage);
  const caseInstructions = instructions[item.id] || [];
  detailEl.innerHTML = `<div class="detail-title">
    <h2>${item.client}</h2>
    <div class="detail-id">Case ID: ${item.id}</div>
    <div class="active-chip"><span></span>${stage.id}. ${stage.name}</div>
  </div>

  <div class="case-facts">
    <div class="fact"><small>Visa</small><strong>${item.visa}</strong></div>
    <div class="fact"><small>Risk</small><strong>${item.risk}</strong></div>
    <div class="fact"><small>Lawyer</small><strong>${item.responsibleLawyer || item.finalCase?.lawyer || 'Helen Wang'}</strong></div>
  </div>

  <section class="detail-section">
    <h3>AI work in progress</h3>
    ${item.agents.map(agent => `<div class="agent-line">
      <div class="agent-avatar">${agent[0][0]}</div>
      <div><div class="agent-name">${agent[0]}</div><div class="agent-task">${agent[1]}</div></div>
      <div class="agent-status">${agent[2]}</div>
      <div class="progress-track"><span style="width:${agent[3]}%"></span></div>
    </div>`).join('')}
  </section>

  <section class="detail-section">
    <h3>Completed for this case</h3>
    <div class="check-list">
      ${item.done.map(done => `<div class="check-item"><div class="mark">✓</div><div><div class="item-title">${done}</div><div class="item-note">Recorded in case file</div></div><div class="instruction-time">Done</div></div>`).join('')}
    </div>
  </section>

  <section class="detail-section">
    <h3>Requires human review (${item.issues.length})</h3>
    <div class="review-list">
      ${item.issues.length ? item.issues.map(issue => `<div class="review-item"><div class="mark">!</div><div><div class="item-title">${issue[0]}</div><div class="item-note">${issue[1]}</div></div><button class="item-action" type="button">Review</button></div>`).join('') : '<div class="check-item"><div class="mark">✓</div><div><div class="item-title">No lawyer blocker detected</div><div class="item-note">AI team can continue current stage</div></div><div class="instruction-time">Clear</div></div>'}
    </div>
  </section>

  <section class="detail-section">
    <h3>Instruction for this case</h3>
    <div class="instruction-box">
      <textarea id="instructionInput" placeholder="Tell the AI team what to do for ${item.client}..."></textarea>
      <div class="send-row"><small>Instruction is saved to this case only</small><button id="sendInstruction" type="button">➜</button></div>
    </div>
    <div class="instruction-list" id="instructionList">
      ${caseInstructions.map(entry => `<div class="instruction-item"><div><div class="item-title">${entry.text}</div><div class="item-note">Owner instruction recorded</div></div><div class="instruction-time">${entry.time}</div></div>`).join('')}
    </div>
  </section>`;
}

function renderDetail() {
  const item = findSelectedItem();
  if (item.intake) {
    renderEnquiryDetail(item);
    return;
  }
  renderCaseDetail(item);
}


function parseKnowledgeRule(text) {
  const lower = text.toLowerCase();
  const isPassport = lower.includes('passport');
  const monthMatch = lower.match(/(\d+)\s*(month|months|个月|月)/);
  const months = monthMatch ? Number(monthMatch[1]) : 12;
  const severity = lower.includes('red') || lower.includes('标红') ? 'Red' : 'Review';
  return {
    title: isPassport ? `Passport expiry within ${months} months` : 'Document review instruction',
    documentType: isPassport ? 'Passport' : 'Document',
    field: isPassport ? 'Expiry date' : 'Document field',
    condition: isPassport ? `Less than ${months} months from today` : 'Needs lawyer-defined condition',
    severity,
    action: lower.includes('lawyer') || lower.includes('律师') ? 'Lawyer review required' : 'Review required',
    sourceText: text,
    status: 'Active',
    createdAt: new Date().toLocaleDateString()
  };
}

function renderKnowledgePreview(rule) {
  kbUnderstanding.innerHTML = `<div class="kb-understanding-title">AI understanding preview</div>
    <div class="kb-preview-grid">
      <div class="kb-preview-field"><small>Rule type</small><strong>Document Review</strong></div>
      <div class="kb-preview-field"><small>Document</small><strong>${rule.documentType}</strong></div>
      <div class="kb-preview-field"><small>Field</small><strong>${rule.field}</strong></div>
      <div class="kb-preview-field"><small>Condition</small><strong>${rule.condition}</strong></div>
      <div class="kb-preview-field"><small>Severity</small><strong>${rule.severity}</strong></div>
      <div class="kb-preview-field"><small>Action</small><strong>${rule.action}</strong></div>
    </div>
    <div class="kb-confirm-row">
      <p>JT Lawyers will save this as a structured rule only after lawyer confirmation.</p>
      <button type="button" id="kbConfirmRule">Confirm rule</button>
    </div>`;
}


function persistCustomCases() {
  const custom = cases.filter(item => item.id.startsWith('C-CUSTOM-'));
  localStorage.setItem('jtLawyersCustomCasesV2', JSON.stringify(custom));
}

function createCaseFromEnquiry(item) {
  const now = new Date();
  const id = `C-CUSTOM-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(now.getTime()).slice(-4)}`;
  const finalCase = item.finalCase || {};
  const profile = item.submittedProfile || {};
  return {
    id,
    client: finalCase.client || item.client,
    visa: finalCase.visa || item.visa,
    stage: 1,
    owner: 'David',
    risk: item.risk || 'Low',
    next: 'Build document checklist',
    updated: 'Just now',
    review: false,
    blocked: false,
    completed: false,
    facts: ['Converted from enquiry', finalCase.lawyer || item.intake.lawyer, finalCase.price || item.intake.quote],
    agents: [
      ['David', 'Creating matter record and initial client checklist', 'Working', 30],
      ['Emily', 'Preparing document review checklist from confirmed strategy', 'Queued', 0]
    ],
    done: [
      'Client accepted proposal',
      `Final price confirmed: ${finalCase.price || item.intake.quote}`,
      `Responsible lawyer confirmed: ${finalCase.lawyer || item.intake.lawyer}`
    ],
    issues: [
      ['New case setup', 'Confirm matter number, client identity documents and first document request before file preparation starts.']
    ],
    sourceEnquiryId: item.id,
    finalStrategy: finalCase.strategy || item.strategyDraft?.pathway || '',
    finalPrice: finalCase.price || item.intake.quote,
    responsibleLawyer: finalCase.lawyer || item.intake.lawyer,
    profile
  };
}

function persistCustomEnquiries() {
  const custom = enquiries.filter(item => item.id.startsWith('E-CUSTOM-'));
  localStorage.setItem('jtLawyersCustomEnquiriesV2', JSON.stringify(custom));
}

function createEnquiryFromForm(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const now = new Date();
  const id = `E-CUSTOM-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(now.getTime()).slice(-4)}`;
  const source = `${data.channel || 'WeChat'} enquiry`;
  return {
    id,
    client: data.client.trim(),
    visa: data.visa.trim(),
    stage: 0,
    owner: data.owner || 'Sarah',
    risk: data.urgency === 'High' ? 'Medium' : 'Low',
    next: 'Send profile form link',
    updated: 'Just now',
    review: false,
    blocked: false,
    completed: false,
    facts: ['New enquiry', data.channel || 'WeChat', data.notes || 'Profile not sent'],
    enquiryStage: 'form-link',
    formLink: `client-intake-form-v2.html?enquiry=${id}`,
    formSentAt: '',
    formOpened: false,
    formOpenedAt: '',
    intake: {
      source,
      channel: data.channel || 'WeChat',
      form: 'Not sent',
      meeting: 'Not booked',
      strategy: 'Not prepared',
      quote: 'Pending',
      budget: data.budget || 'Unknown',
      urgency: data.urgency || 'Normal',
      lawyer: 'Helen Wang'
    },
    submittedProfile: null,
    strategyDraft: null,
    meeting: null,
    agents: [],
    done: ['Initial enquiry profile created'],
    issues: [['Profile required', 'Send the client profile form link before lawyer assessment.']],
    contact: { phone: data.phone || '', email: data.email || '' },
    notes: data.notes || ''
  };
}

function renderEnquiryMetrics() {
  const openEl = document.getElementById('openEnquiriesCount');
  const returnedEl = document.getElementById('returnedFormsCount');
  const reviewEl = document.getElementById('lawyerReviewEnquiriesCount');
  const quoteEl = document.getElementById('quoteReadyCount');
  if (!openEl) return;
  openEl.textContent = enquiries.length;
  returnedEl.textContent = enquiries.filter(item => item.submittedProfile).length;
  reviewEl.textContent = enquiries.filter(item => item.enquiryStage === 'form-returned' || item.review).length;
  quoteEl.textContent = enquiries.filter(item => item.strategyDraft || item.enquiryStage === 'strategy-ready' || item.enquiryStage === 'meeting-booked' || item.enquiryStage === 'meeting-completed' || item.enquiryStage === 'converted').length;
}

function renderEnquiries() {
  if (!enquiryRows) return;
  const filtered = enquiries.filter(item => {
    if (!enquirySearchTerm) return true;
    const haystack = [item.client, item.id, item.visa, item.owner, item.next, item.intake.source, item.intake.channel, item.intake.form, item.intake.meeting, ...item.facts].join(' ').toLowerCase();
    return haystack.includes(enquirySearchTerm);
  });
  if (!filtered.length) {
    enquiryRows.innerHTML = '<div class="empty-state">No enquiries match the current search.</div>';
    return;
  }
  enquiryRows.innerHTML = filtered.map(item => {
    const active = item.id === selectedCaseId ? ' active' : '';
    return `<div class="enquiry-row${active}" data-case="${item.id}">
    <div><strong>${item.client}</strong><small>${item.id} · ${item.intake.source}</small></div>
    <div><span class="channel-pill">${item.intake.channel}</span></div>
    <div>${item.visa}</div>
    <div><span class="stage-pill" style="--stage:#0f9b8e;--stage-soft:#e3f6f4">${item.intake.form}</span></div>
    <div>${item.intake.meeting}</div>
    <div><span class="action-pill">${item.next}</span></div>
  </div>`;
  }).join('');
}

function renderKnowledgeRules() {
  const seedRules = [
    { title: 'Employer reference must include supervisor contact details', documentType: 'Employment evidence', condition: 'Missing direct supervisor contact', action: 'Flag for lawyer review', status: 'Active', createdAt: 'Seed rule' },
    { title: 'Income evidence must match tax records', documentType: 'Income evidence', condition: 'Payslip and tax return variance', action: 'Flag inconsistency', status: 'Active', createdAt: 'Seed rule' }
  ];
  const allRules = [...knowledgeRules, ...seedRules];
  kbRuleCount.textContent = `${allRules.length} active`;
  kbRuleList.innerHTML = allRules.map(rule => `<div class="kb-rule-item">
    <div><strong>${rule.title}</strong><small>${rule.documentType} · ${rule.condition} · ${rule.action}</small></div>
    <span class="rule-status">${rule.status}</span>
  </div>`).join('');
}

function showView(panel) {
  const dashboardPanel = panel === 'dashboard' || panel === 'agents' || panel === 'documents' || panel === 'reports' || panel === 'training';
  const casesPanel = panel === 'cases';
  const knowledge = panel === 'knowledge';
  const enquiriesPanel = panel === 'enquiries';
  dashboardView.classList.toggle('active', dashboardPanel);
  casesView.classList.toggle('active', casesPanel);
  knowledgeView.classList.toggle('active', knowledge);
  enquiriesView.classList.toggle('active', enquiriesPanel);
  document.querySelectorAll('.menu-item').forEach(item => item.classList.toggle('active', item.dataset.panel === panel));
  officeShell.classList.add('detail-collapsed');
}

function renderTabs() {
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.classList.toggle('active', button.dataset.filter === activeFilter);
    button.classList.toggle('selected', button.dataset.filter === activeFilter);
  });
}

function renderAll() {
  renderDashboard();
  renderStages();
  renderSummary();
  renderTabs();
  renderRows();
  renderDetail();
  renderKnowledgeRules();
  renderEnquiryMetrics();
  renderEnquiries();
}

document.addEventListener('click', event => {
  const menuItem = event.target.closest('.menu-item');
  if (menuItem) {
    showView(menuItem.dataset.panel);
    return;
  }

  const dashboardNav = event.target.closest('[data-dashboard-nav]');
  if (dashboardNav) {
    const target = dashboardNav.dataset.dashboardNav;
    if (target === 'enquiries') {
      showView('enquiries');
      renderAll();
      return;
    }
    if (target === 'cases' || target === 'case-review' || target === 'case-risk' || target === 'case-blocked') {
      activeStage = null;
      activeFilter = target === 'case-review' ? 'review' : target === 'case-risk' ? 'risk' : target === 'case-blocked' ? 'blocked' : 'all';
      searchTerm = '';
      if (searchEl) searchEl.value = '';
      showView('cases');
      renderAll();
      return;
    }
    showView('dashboard');
    return;
  }

  if (event.target.id === 'enquiryInfoToggle' || event.target.closest('#enquiryInfoToggle')) {
    const expanded = enquiryPanel.classList.toggle('enquiry-panel-expanded');
    enquiryPanel.classList.toggle('enquiry-panel-collapsed', !expanded);
    enquiryInfoToggle.setAttribute('aria-expanded', String(expanded));
    enquiryInfoToggle.setAttribute('aria-label', expanded ? 'Hide intake workflow summary' : 'Show intake workflow summary');
    return;
  }

  if (event.target.id === 'newEnquiryButton') {
    newEnquiryModal.hidden = false;
    newEnquiryForm.reset();
    newEnquiryForm.elements.client.focus();
    return;
  }

  if (event.target.id === 'closeNewEnquiry' || event.target.id === 'cancelNewEnquiry' || event.target.id === 'newEnquiryModal') {
    newEnquiryModal.hidden = true;
    return;
  }

  if (event.target.id === 'kbParseRule') {
    const text = kbRuleInput.value.trim();
    if (!text) return;
    pendingKbRule = parseKnowledgeRule(text);
    renderKnowledgePreview(pendingKbRule);
    return;
  }

  if (event.target.id === 'kbConfirmRule') {
    if (!pendingKbRule) return;
    knowledgeRules = [pendingKbRule, ...knowledgeRules].slice(0, 8);
    localStorage.setItem('jtLawyersKnowledgeRulesV2', JSON.stringify(knowledgeRules));
    kbRuleInput.value = '';
    pendingKbRule = null;
    kbUnderstanding.innerHTML = '<div class="kb-understanding-title">Rule saved</div><div class="kb-empty-understanding">The rule is now active in Knowledge Base and available to Emily for document review.</div>';
    renderKnowledgeRules();
    return;
  }

  const stageButton = event.target.closest('[data-stage]');
  if (stageButton) {
    const nextStage = Number(stageButton.dataset.stage);
    activeStage = activeStage === nextStage ? null : nextStage;
    activeFilter = 'all';
    renderAll();
    return;
  }

  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    activeStage = null;
    renderAll();
    return;
  }

  const row = event.target.closest('[data-case]');
  if (row) {
    selectedCaseId = row.dataset.case;
    officeShell.classList.remove('detail-collapsed');
    detailToggle.setAttribute('aria-pressed', 'true');
    detailToggle.setAttribute('aria-label', 'Hide case panel');
    renderAll();
    return;
  }

  if (event.target.id === 'clearFilter') {
    activeFilter = 'all';
    activeStage = null;
    searchTerm = '';
    searchEl.value = '';
    renderAll();
    return;
  }

  if (event.target.id === 'detailToggle' || event.target.closest('#detailToggle')) {
    officeShell.classList.add('detail-collapsed');
    detailToggle.setAttribute('aria-pressed', 'false');
    detailToggle.setAttribute('aria-label', 'Case panel hidden');
    return;
  }

  const enquiryAction = event.target.closest('[data-enquiry-action]');
  if (enquiryAction) {
    const item = enquiries.find(entry => entry.id === selectedCaseId);
    if (!item) return;
    const action = enquiryAction.dataset.enquiryAction;
    if (action === 'copy-meeting-summary') {
      const text = meetingSummaryText(item);
      navigator.clipboard?.writeText(text).then(() => {
        instructions[item.id] = [{ text: 'Meeting summary copied for client sharing.', time: 'Now' }, ...(instructions[item.id] || [])].slice(0, 4);
        localStorage.setItem('jtLawyersCaseInstructionsV2', JSON.stringify(instructions));
        renderDetail();
      }).catch(() => {
        instructions[item.id] = [{ text: 'Copy unavailable. Meeting summary is visible for manual sharing.', time: 'Now' }, ...(instructions[item.id] || [])].slice(0, 4);
        localStorage.setItem('jtLawyersCaseInstructionsV2', JSON.stringify(instructions));
        renderDetail();
      });
      return;
    }
    if (action === 'client-accepted') {
      item.enquiryStage = 'accepted-confirmation';
      item.next = 'Confirm strategy and price';
      renderAll();
      return;
    }
    if (action === 'client-not-accepted') {
      const box = document.getElementById('declineBox');
      if (box) box.hidden = false;
      return;
    }
    if (action === 'send-form') {
      item.enquiryStage = 'waiting-form';
      item.formSentAt = new Date().toISOString();
      item.intake.form = 'Sent just now';
      item.next = 'Waiting for profile form';
    }
    if (action === 'receive-form') {
      item.enquiryStage = 'form-returned';
      item.intake.form = 'Complete';
      item.next = 'Senior lawyer strategy';
      item.submittedProfile = {
        chineseName: item.client,
        englishName: 'Client English name pending',
        phone: '+61 400 000 000',
        email: `${item.client.toLowerCase().replaceAll(' ', '.')}@example.com`,
        currentVisa: 'To be confirmed by senior lawyer',
        location: 'Australia / China',
        family: 'Family members listed in profile form',
        background: 'Profile form received. AI extracted the key personal and visa facts.',
        preferredLanguage: 'Mandarin'
      };
    }
    if (action === 'save-strategy') {
      const strategyText = document.getElementById('strategyInput')?.value.trim() || 'Strategy prepared for consultation';
      const quoteText = document.getElementById('quoteInput')?.value.trim() || item.intake.budget;
      item.enquiryStage = 'strategy-ready';
      item.next = 'Book meeting';
      item.intake.strategy = 'Ready';
      item.intake.quote = quoteText;
      item.strategyDraft = { pathway: strategyText, keyRisk: 'Senior lawyer prepared strategy for consultation', quote: quoteText, preparedBy: item.intake.lawyer };
    }
    if (action === 'send-invite' || action === 'update-meeting') {
      item.enquiryStage = 'meeting-booked';
      item.next = 'Meeting booked';
      item.meeting = {
        date: document.getElementById('meetingDate')?.value || '2026-06-30',
        time: document.getElementById('meetingTime')?.value || '10:00',
        location: document.getElementById('meetingLocation')?.value || 'Zoom',
        attendees: document.getElementById('meetingAttendees')?.value || `${item.intake.lawyer}, ${item.client}`,
        inviteStatus: action === 'send-invite' ? 'Summary ready to share' : (item.meeting?.inviteStatus || 'Summary ready to share')
      };
      item.intake.meeting = `${item.meeting.date} ${item.meeting.time}`;
    }
    if (action === 'complete-meeting') {
      item.enquiryStage = 'meeting-completed';
      item.next = 'Record client decision';
    }
    if (action === 'confirm-create-case') {
      item.enquiryStage = 'converted';
      item.next = 'Converted to case';
      item.finalCase = {
        client: document.getElementById('finalClientName')?.value.trim() || item.client,
        visa: document.getElementById('finalVisaPathway')?.value.trim() || item.visa,
        strategy: document.getElementById('finalStrategy')?.value.trim() || item.strategyDraft?.pathway || '',
        price: document.getElementById('finalPrice')?.value.trim() || item.strategyDraft?.quote || item.intake.quote,
        lawyer: document.getElementById('finalLawyer')?.value.trim() || item.intake.lawyer,
        note: document.getElementById('finalNote')?.value.trim() || ''
      };
      item.client = item.finalCase.client;
      item.visa = item.finalCase.visa;
      item.intake.quote = item.finalCase.price;
      item.intake.lawyer = item.finalCase.lawyer;
      const newCase = createCaseFromEnquiry(item);
      cases.unshift(newCase);
      persistCustomCases();
      persistCustomEnquiries();
      selectedCaseId = newCase.id;
      activeFilter = 'all';
      activeStage = null;
      searchTerm = '';
      if (searchEl) searchEl.value = '';
      instructions[newCase.id] = [{ text: `Created from enquiry ${item.id}. Final price: ${item.finalCase.price}.`, time: 'Now' }];
      instructions[item.id] = [{ text: `Accepted and converted to case ${newCase.id}.`, time: 'Now' }, ...(instructions[item.id] || [])].slice(0, 4);
      localStorage.setItem('jtLawyersCaseInstructionsV2', JSON.stringify(instructions));
      showView('cases');
      officeShell.classList.remove('detail-collapsed');
      detailToggle.setAttribute('aria-pressed', 'true');
      detailToggle.setAttribute('aria-label', 'Hide case panel');
    }
    if (action === 'record-decline') {
      const reason = document.getElementById('declineReason')?.value.trim() || 'Reason not provided';
      instructions[item.id] = [{ text: `Client did not proceed: ${reason}`, time: 'Now' }, ...(instructions[item.id] || [])].slice(0, 4);
      localStorage.setItem('jtLawyersCaseInstructionsV2', JSON.stringify(instructions));
    }
    renderAll();
    return;
  }

  if (event.target.id === 'sendInstruction') {
    const input = document.getElementById('instructionInput');
    const text = input.value.trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    instructions[selectedCaseId] = [{ text, time: now }, ...(instructions[selectedCaseId] || [])].slice(0, 4);
    localStorage.setItem('jtLawyersCaseInstructionsV2', JSON.stringify(instructions));
    input.value = '';
    renderDetail();
  }
});

searchEl.addEventListener('input', event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderRows();
});

enquirySearchEl.addEventListener('input', event => {
  enquirySearchTerm = event.target.value.trim().toLowerCase();
  renderEnquiries();
});

newEnquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  const enquiry = createEnquiryFromForm(newEnquiryForm);
  enquiries.unshift(enquiry);
  persistCustomEnquiries();
  selectedCaseId = enquiry.id;
  enquirySearchTerm = '';
  enquirySearchEl.value = '';
  newEnquiryModal.hidden = true;
  officeShell.classList.remove('detail-collapsed');
  detailToggle.setAttribute('aria-pressed', 'true');
  detailToggle.setAttribute('aria-label', 'Hide case panel');
  renderAll();
});

renderAll();

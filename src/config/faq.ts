// 1. Define internal structural layout types for standard lists
export type ListItem = 
  | string 
  | { strong: string; text: string };

// 2. Define block types to mirror your FaqAccordion component's switch-case statement
export type PermissionRow = {
  name: string;
  roles: { CASHIER: boolean; 'SHOP MANAGER': boolean; ACCOUNTANT: boolean; ADMIN: boolean };
};

export type FaqBlock =
  | { type: 'p'; text: string }
  | { type: 'p-strong'; text: string }
  | { type: 'ul'; items: ListItem[] }
  | { type: 'ol'; items: string[] }
  | { type: 'permissions-table'; permissions?: PermissionRow[] };

export interface FaqItem {
  id: string;
  category: 'beginner' | 'intermediate' | 'accountant';
  question: string;
  wide?: boolean; 
  body: FaqBlock[];
}

export const landingFaq: FaqItem[] = [
  {
    id: 'not-finished',
    category: 'beginner',
    question: "I didn't finish today's closing. Is that okay?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "Yes, that is completely fine! Minty saves your progress automatically. You can jump back in tomorrow morning and pick up exactly right where you left off without losing any drawer records." 
      }
    ]
  },
  {
    id: 'closing-time',
    category: 'beginner',
    question: "Do I have to close at the same time every day?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "No. While consistency helps your business rhythms, Minty processes shifts dynamically. You can close out your numbers whenever your operating doors officially lock for the day." 
      }
    ]
  },
  {
    id: 'skip-day',
    category: 'beginner',
    question: "What happens if I skip a day?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "Minty flags the day as an inactive sequence. When you run your next closing session, you can choose to group the historical roll-forward values or account for them separately." 
      }
    ]
  },
  {
    id: 'exact-numbers',
    category: 'beginner',
    question: "Do the numbers need to be exact?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "Ideally yes, but small cash drawer discrepancies happen. Minty logs variances transparently under a 'Safe Discrepancy Margin' field so your bank deposit sheets remain balanced." 
      }
    ]
  },
  {
    id: 'dont-match',
    category: 'beginner',
    question: "What if numbers don't match exactly?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "Don't panic. Minty walks you through a short reconciliation checklist to pinpoint where the cash, terminal credit cards, or petty voucher entries strayed off course." 
      }
    ]
  },
  {
    id: 'change-numbers',
    category: 'beginner',
    question: "Can Minty change my numbers without me knowing?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "Absolutely not. Minty acts purely as an immutable Ledger Ledger Ledger interface mirror. Your logged balances can never be modified or changed automatically behind the scenes." 
      }
    ]
  },
  {
    id: 'no-receipt',
    category: 'beginner',
    question: "What if I don't have a receipt?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "You can write a digital memo voucher inside the application describing the itemization, cost, and purpose to successfully offset cash balancing checks." 
      }
    ]
  },
  {
    id: 'same-day-upload',
    category: 'beginner',
    question: "Do receipts have to be uploaded on the same day?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "Not necessarily. While immediate snapshots avoid lost papers, you can queue uploaded receipts into your open balancing workflows at any point during the current tracking week." 
      }
    ]
  },
  {
    id: 'something-off',
    category: 'beginner',
    question: "Will I get in trouble if something is off?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "No, Minty is a helpful operational tool, not a strict monitoring authority. Discrepancies simply display as clear adjustments so you and your accountant have complete clarity." 
      }
    ]
  },
  {
    id: 'monitoring-shop',
    category: 'beginner',
    question: "Is Minty monitoring or controlling my shop?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "Minty does not control store POS machines or banking terminals. We only receive and organize structural accounting balance sheets that you explicitly submit." 
      }
    ]
  },
  {
    id: 'customer-support',
    category: 'beginner',
    question: "When should I contact customer support?",
    wide: false,
    body: [
      { 
        type: 'p', 
        text: "Anytime you run into internal server sync issues, math system glitches, or if you need general help sorting out a complex, historical ledger lock error!" 
      }
    ]
  },

  {
    id: 'xero-disconnect',
    category: 'accountant',
    question: "How do I disconnect from Xero?",
    wide: true,
    body: [
      { type: 'p', text: "No hard feelings, disconnecting is quick and you can do it from either side. If you'd like to unlink from within Minty, just click the Disconnect button and I'll close the Xero connection at the same time. If you'd rather do it from Xero, head to Manage Connected Apps and click Disconnect there, which unlinks Minty right along with it. Either way, both sides disconnect together, so you only ever need to do it once." }
    ]
  },
  {
    id: 'xero-not-covered',
    category: 'accountant',
    question: "What does the integration not cover?",
    wide: true,
    body: [
      { type: 'p', text: "Great question, and I like being upfront about where I stop. I keep connections strictly one-to-one, so a single Xero organization only ever links to one Minty entity. I also won't connect if you're signed in to Xero as a different person than the one who clicked, since the two have to match. Invitations stay personal too, so only the exact address an invite was sent to can accept it. When it comes to your data, I never delete your Xero contacts. I only add and update, so nothing goes missing by accident. In certain pickers, like expense and owner accounts, I quietly leave out the accounts Xero manages on its own. There aren't any sync settings to fiddle with either, since I handle the timing myself. If there's something specific you're wondering whether I handle, just ask and I'll always tell you straight." }
    ]
  },
  {
    id: 'xero-processing-fees',
    category: 'accountant',
    question: "Where do payment processing fees show up in Xero?",
    wide: true,
    body: [
      { type: 'p', text: "Whenever you publish from Minty, I tuck each transaction into the right spot in Xero for you. Publish from the petty cash module and I'll record it under Spend & Receive Money, where you can check it anytime under Cash In & Out on your Xero Home page. Every petty cash transaction shows up there, sorted by its type. Publish from the payment module and I'll post it to Bills instead, so just open the Bills page in Xero and your recorded transaction will be waiting there." }
    ]
  },
  {
    id: 'xero-reconcile',
    category: 'accountant',
    question: "How do I reconcile my sales data in Xero?",
    wide: true,
    body: [
      { type: 'p', text: "Reconciling happens over in Xero, and the path depends on which module you're using. For the payment module, I keep it hands-off. I pull your bank feed and drop it straight onto your Xero bank statement, so you can head there and reconcile right away. The petty cash module takes one extra step to reach the bank statement. Once you publish from Minty, your entries land on Xero's Account Transactions page. From there, export them as a CSV, then import that CSV into your bank statement page, and now you can reconcile them in Xero just like everything else." }
    ]
  },
  {
    id: 'xero-sync-timing',
    category: 'accountant',
    question: "When does my data sync, and is there anything I can adjust?",
    wide: true,
    body: [
      { type: 'p', text: "Here's the honest rundown. I don't run a constant real-time stream. Instead, I move data at two natural moments. Coming in from Xero, I keep a local copy of your chart of accounts and contacts so pages load fast. I download everything when you first connect, then quietly refresh it as you visit the relevant pages, updating only what's actually changed. I never delete a contact, so I only ever add and update. Going out to Xero, your transactions are sent when you Publish a report, which I handle in the background so you're never left waiting. Behind the scenes I keep the connection alive on my own, and your access renews automatically whenever it's needed. Apart from connecting and logging in, there are no sync settings for you to manage. I take care of the timing." }
    ]
  },

  {
    id: 'split-shifts',
    category: 'intermediate',
    question: "How do I balance split-shifts or mid-day drawer handoffs?",
    wide: false,
    body: [
      { type: 'p', text: "Intermediate workflows allow mid-day drops. You can perform an intermediate snapshot audit trail without completely finalizing or closing the daily store lifecycle window." }
    ]
  },


  {
    id: 'export-ledger',
    category: 'accountant',
    question: "Can I export formatted journals directly into QuickBooks or Xero?",
    wide: true,
    body: [
      { type: 'p-strong', text: "Yes. System compliance data downloads cleanly into standardized CSV/XLS format matrices built for direct general ledger injection maps." }
    ]
  },

  {
    id: 'user-permissions',
    category: 'accountant',
    question: "Why do different users see different things in Minty?",
    wide: true,
    body: [
      {
        type: 'p',
        text: "Minty uses role-based permissions so each user sees only what they need. This prevents mistakes and reduces confusion."
      },
      {
        type: 'permissions-table',
        permissions: [
          { name: 'Prepare daily report', roles: { CASHIER: true, 'SHOP MANAGER': true, ACCOUNTANT: true, ADMIN: true } },
          { name: 'View daily report you created', roles: { CASHIER: true, 'SHOP MANAGER': true, ACCOUNTANT: true, ADMIN: true } },
          { name: 'View daily report of the whole shop', roles: { CASHIER: false, 'SHOP MANAGER': true, ACCOUNTANT: true, ADMIN: true } },
          { name: 'Sales method setting', roles: { CASHIER: false, 'SHOP MANAGER': false, ACCOUNTANT: true, ADMIN: true } },
          { name: 'Expense code setting', roles: { CASHIER: false, 'SHOP MANAGER': false, ACCOUNTANT: true, ADMIN: true } },
          { name: 'Publish to Xero', roles: { CASHIER: false, 'SHOP MANAGER': false, ACCOUNTANT: true, ADMIN: true } },
          { name: 'Connect & disconnect to Xero', roles: { CASHIER: false, 'SHOP MANAGER': false, ACCOUNTANT: false, ADMIN: true } }
        ]
      }
    ]
  },
];

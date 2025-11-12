export interface DownloadAsset {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;
  category: string;
  access: "free" | "locked";
  thumbnail?: string;
  formGuid?: string; // Override default form for specific assets
}

export const downloadAssets: DownloadAsset[] = [
  {
    id: "referral-program-de",
    title: "Noreja Referral Program (DE)",
    description: "Discover how to participate in the Noreja referral program, including the referral flow, qualification criteria, and payout milestones.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/Noreja%20Referral%20Program%20DE.pdf",
    fileSize: "1.1 MB",
    fileType: "PDF",
    category: "Referral Program",
    access: "free",
    thumbnail: "/placeholder.svg"
  }
];
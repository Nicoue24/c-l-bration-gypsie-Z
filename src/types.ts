export interface RSVPData {
  guestName: string;
  contact: string;
  attending: 'yes' | 'no';
  attendanceType: 'solo' | 'couple';
  companionName?: string;
  hasChildren: boolean;
  childrenCount: number;
  totalGuests: number;
  totalAccompanying: number;
  note?: string;
  submittedAt: string;
}

export interface ProgramItem {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  iconName: string;
}

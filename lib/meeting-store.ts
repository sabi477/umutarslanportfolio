/**
 * Görüşme talepleri için basit depolama.
 * Geliştirme için in-memory. Production'da veritabanı kullanın.
 */

export interface MeetingRequest {
  id: string;
  name: string;
  subject: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  createdAt: string;
}

const store: MeetingRequest[] = [];

export function addMeetingRequest(data: Omit<MeetingRequest, "id" | "createdAt">): MeetingRequest {
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const request: MeetingRequest = { ...data, id, createdAt };
  store.push(request);
  return request;
}

export function getMeetingRequests(): MeetingRequest[] {
  return [...store].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

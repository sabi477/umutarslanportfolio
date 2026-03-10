"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

interface MeetingRequestsTableProps {
  requests: MeetingRequest[];
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function MeetingRequestsTable({ requests }: MeetingRequestsTableProps) {
  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-border bg-background p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-foreground">Görüşme Talepleri</h2>
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">İsim</TableHead>
            <TableHead className="w-[180px]">E-posta</TableHead>
            <TableHead className="w-[120px]">Telefon</TableHead>
            <TableHead>Konu</TableHead>
            <TableHead className="w-[100px]">Tarih</TableHead>
            <TableHead className="w-[70px] text-right">Saat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((req) => (
            <TableRow key={req.id} className="transition-colors hover:bg-muted/40">
              <TableCell className="font-medium">{req.name}</TableCell>
              <TableCell>
                <a
                  href={`mailto:${req.email}`}
                  className="text-primary hover:underline"
                >
                  {req.email}
                </a>
              </TableCell>
              <TableCell>
                <a
                  href={`tel:${req.phone}`}
                  className="text-primary hover:underline"
                >
                  {req.phone}
                </a>
              </TableCell>
              <TableCell className="truncate">{req.subject}</TableCell>
              <TableCell>{formatDate(req.date)}</TableCell>
              <TableCell className="text-right">{req.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} className="text-right font-semibold">
              Toplam
            </TableCell>
            <TableCell className="text-right font-bold text-foreground">
              {requests.length} talep
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Görüşme talepleri özeti
      </p>
    </div>
  );
}

"use client";

import * as React from "react";
import { tr } from "date-fns/locale";
import { CheckCircle2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
}

export interface CalendarSchedulerProps {
  timeSlots?: string[];
  onConfirm?: (value: {
    name?: string;
    subject?: string;
    phone?: string;
    email?: string;
    date?: Date;
    time?: string;
  }) => void;
}

function CalendarScheduler({
  timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ],
  onConfirm,
}: CalendarSchedulerProps) {
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [time, setTime] = React.useState<string | undefined>();
  const [phoneError, setPhoneError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePhoneBlur = () => {
    const digits = phone.replace(/\D/g, "");
    const valid =
      (digits.length === 10 && digits.startsWith("5")) ||
      (digits.length === 11 && digits.startsWith("05"));
    if (phone && !valid) {
      setPhoneError("Geçerli bir telefon numarası girin (05xx xxx xx xx)");
    }
  };

  const handleEmailBlur = () => {
    if (email && !isValidEmail(email)) {
      setEmailError("Geçerli bir e-posta adresi girin");
    }
  };

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid =
    (phoneDigits.length === 10 && phoneDigits.startsWith("5")) ||
    (phoneDigits.length === 11 && phoneDigits.startsWith("05"));
  const emailValid = isValidEmail(email);
  const isFormValid =
    name.trim() &&
    subject.trim() &&
    phoneValid &&
    emailValid &&
    date &&
    time;

  return (
    <div className="space-y-4">
      {showSuccess && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground"
        >
          <CheckCircle2 className="size-5 shrink-0 text-primary" />
          Toplantı başarıyla planlandı. En kısa sürede sizinle iletişime geçeceğiz.
        </div>
      )}
      <Card className="w-full max-w-[600px] shadow-none border-[1px] border-border/80 bg-card">
        <CardHeader>
          <CardTitle className="text-base">Toplantı Ayarla</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* İsim, Konu, Telefon, E-posta - alt alta */}
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">İsim</Label>
              <Input
                id="name"
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-[1px] border-border/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Konu</Label>
              <Input
                id="subject"
                placeholder="Toplantı konusu"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border-[1px] border-border/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                placeholder="05xx xxx xx xx"
                value={phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 11);
                  setPhone(val);
                  setPhoneError("");
                }}
                onBlur={handlePhoneBlur}
                className={cn("border-[1px] border-border/80", phoneError && "border-destructive")}
              />
              {phoneError && (
                <p className="text-xs text-destructive">{phoneError}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@email.com"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className={cn("border-[1px] border-border/80", emailError && "border-destructive")}
              />
              {emailError && (
                <p className="text-xs text-destructive">{emailError}</p>
              )}
            </div>
          </div>

          {/* Takvim ve Saat */}
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Takvim */}
            <div className="flex-1 rounded-md border-[1px] border-border/80 p-2">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={tr}
                className="rounded-md"
              />
            </div>

            {/* Saat Dilimleri */}
            <div className="flex-1 overflow-y-auto rounded-md border-[1px] border-border/80 p-2 max-h-[320px]">
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Saat seçin
              </p>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={time === slot ? "default" : "outline"}
                    size="sm"
                    className={cn("w-full border-[1px] border-border/80", time === slot && "ring-2 ring-primary")}
                    onClick={() => setTime(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setName("");
              setSubject("");
              setPhone("");
              setEmail("");
              setPhoneError("");
              setEmailError("");
              setDate(undefined);
              setTime(undefined);
            }}
          >
            Sıfırla
          </Button>
          <Button
            size="sm"
            onClick={() => {
              onConfirm?.({
                name: name || undefined,
                subject: subject || undefined,
                phone: phone || undefined,
                email: email || undefined,
                date,
                time,
              });
              setShowSuccess(true);
              setTimeout(() => setShowSuccess(false), 4000);
            }}
            disabled={!isFormValid}
          >
            Onayla
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export { CalendarScheduler };

"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeftIcon, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MeetingRequestsTable } from "@/components/ui/meeting-requests-table";
import type { MeetingRequest } from "@/components/ui/meeting-requests-table";

export default function AdminPage() {
  const [password, setPassword] = React.useState("");
  const [authenticated, setAuthenticated] = React.useState(false);
  const [requests, setRequests] = React.useState<MeetingRequest[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [refreshing, setRefreshing] = React.useState(false);
  const [refreshSuccess, setRefreshSuccess] = React.useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/meetings", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (res.ok) {
        const data = await res.json();
        setRequests(data);
        setAuthenticated(true);
      } else {
        setError("Yanlış şifre");
      }
    } catch {
      setError("Bağlantı hatası");
    } finally {
      setLoading(false);
    }
  };

  const refreshRequests = async () => {
    setRefreshing(true);
    setRefreshSuccess(false);
    try {
      const res = await fetch("/api/meetings", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (res.ok) {
        const data = await res.json();
        setRequests(data);
        setRefreshSuccess(true);
        setTimeout(() => setRefreshSuccess(false), 3000);
      }
    } finally {
      setRefreshing(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm space-y-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" aria-label="Ana sayfaya dön">
                <ArrowLeftIcon className="size-4" />
              </Link>
            </Button>
            <h1 className="text-lg font-semibold">Admin Girişi</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Şifre</CardTitle>
              <CardDescription>
                Görüşme taleplerini görmek için şifrenizi girin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Şifre</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Admin şifresi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-[1px] border-border/80"
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Giriş yapılıyor..." : "Giriş"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" aria-label="Ana sayfaya dön">
                <ArrowLeftIcon className="size-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-semibold">Görüşme Talepleri</h1>
              <p className="text-sm text-muted-foreground">
                {requests.length} talep
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={refreshRequests}
            disabled={refreshing}
          >
            {refreshing ? "Yenileniyor..." : "Yenile"}
          </Button>
        </div>

        {refreshSuccess && (
          <div
            role="status"
            className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground"
          >
            <CheckCircle2 className="size-5 shrink-0 text-primary" />
            Liste yenilendi
          </div>
        )}

        {requests.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <Calendar className="mb-4 size-12 text-muted-foreground/50" />
              <p className="text-muted-foreground">
                Henüz görüşme talebi yok
              </p>
            </CardContent>
          </Card>
        ) : (
          <MeetingRequestsTable requests={requests} />
        )}
      </div>
    </div>
  );
}

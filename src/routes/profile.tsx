import { createFileRoute } from '@tanstack/react-router';
import { ProfilePage } from '@/components/community/profile';
import { pageHead } from '@/lib/community/meta';
export const Route=createFileRoute('/profile')({head:()=>pageHead('Alex Morgan — Reputation','Alex’s helpful answers, achievements, and contributions to VesitConnect.'),component:ProfilePage});

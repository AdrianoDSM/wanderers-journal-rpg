'use client';

import { ScrollText, BookOpen, ChevronDown, FileText } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Link from 'next/link';

export default function Sidebar() {

  return (
    <aside className="hidden md:flex w-64 flex-col bg-background border-r border-crimson/20 p-4">
        <div className="flex items-center gap-2 mb-8">
          <ScrollText className="h-10 w-10 text-primary/60 mr-2" />
          <span className="text-xl font-bold tracking-wider text-secondary">Wanderers Journal</span>
        </div>

        <nav className="space-y-1">
          <Collapsible defaultOpen className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-md bg-primary/40 text-silver hover:text-crimson">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className='text-secondary'>Campaigns</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-2 mt-1 space-y-1">
              <Link
                href={'#'}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-silver hover:bg-crimson/5 hover:text-crimson"
              >
                <FileText className="h-4 w-4" />
                <span>Notes</span>
              </Link> 
              {/* {campaigns.map((campaign) => (
                <Collapsible key={campaign.id} className="w-full">
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-md text-silver hover:bg-crimson/5 hover:text-crimson">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>{campaign.name}</span>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 space-y-1">
                    <Link
                      href={`/campaign/${campaign.id}/notes`}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-silver hover:bg-crimson/5 hover:text-crimson"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Notes</span>
                    </Link>
                    <Link
                      href={`/campaign/${campaign.id}/npcs`}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-silver hover:bg-crimson/5 hover:text-crimson"
                    >
                      <Users className="h-4 w-4" />
                      <span>NPCs</span>
                    </Link>
                    <Link
                      href={`/campaign/${campaign.id}/sessions`}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-silver hover:bg-crimson/5 hover:text-crimson"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Sessions</span>
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
              ))} */}
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </aside>
  );
}
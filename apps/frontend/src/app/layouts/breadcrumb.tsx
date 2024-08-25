"use client";

import Link from "next/link";
import * as React from "react";

import { APP_CONFIG } from "@/app.config";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMediaQuery } from "@hooks/use-media-query";
import { useSelectedLayoutSegments } from "next/navigation";
import { useCallback } from "react";
import type {
  BreadcrumbList as RichSnippetBreadcrumb,
  WithContext,
} from "schema-dts";

const ITEMS_TO_DISPLAY = 3;

export function BreadcrumbResponsive() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const segments = useSelectedLayoutSegments();

  const formatPath = useCallback((str: string): string => {
    const words = str.split("-");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1),
    );
    return capitalizedWords.join(" ");
  }, []);

  if (segments.length === 0) {
    return null;
  }

  const items = segments.map((segment, i) => {
    return {
      href:
        i === segments.length - 1
          ? undefined
          : `${segments.slice(0, i + 1).join("/")}`,
      label: formatPath(segment),
    };
  });

  const richSnippet: WithContext<RichSnippetBreadcrumb> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: APP_CONFIG.website,
      },
      // @ts-ignore
      ...segments.map((segment, index) => {
        const segmentPath = `/${segments.slice(0, index + 1).join("/")}`;
        return {
          "@type": "ListItem",
          position: index + 2,
          name: formatPath(segment),
          item: APP_CONFIG.website + segmentPath,
        };
      }),
    ],
  };

  return (
    <Breadcrumb className="container my-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={"/"}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {items.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(1, -2).map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={item.href ? item.href : "#"}>
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {items.slice(1, -2).map((item, index) => (
                        <Link
                          key={index}
                          href={item.href ? item.href : "#"}
                          className="py-1 text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}

        {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href ? (
              <>
                <BreadcrumbLink
                  asChild
                  className="max-w-20 truncate md:max-w-none"
                >
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                {item.label}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>

      <script
        id="breadcrumb-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(richSnippet) }}
      />
    </Breadcrumb>
  );
}

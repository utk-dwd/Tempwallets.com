"use client";

import { Tweet } from 'react-tweet';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';

interface TestimonialsProps {
  tweetIds?: string[];
  tweetsPerPage?: number;
}

const Testimonials = ({ 
  tweetIds = [
    "1980567587197960624",
    "1978686694393008191",
    "1975851268104176045",
    "1980569009897763254",
    "1980569069444305218",
    "1974371066773713232",
    "1971158331629895734"
  ],
  tweetsPerPage = 8 
}: TestimonialsProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const totalPages = Math.ceil(tweetIds.length / tweetsPerPage);
  const startIndex = currentPage * tweetsPerPage;
  const endIndex = startIndex + tweetsPerPage;
  const currentTweets = tweetIds.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="bg-background py-12 md:py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          {/* Left Side - Not sticky on mobile */}
          <div className="lg:col-span-4 lg:sticky lg:top-16 lg:self-start h-fit order-1 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Loved by the community
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                See what people are saying about TempWallets
              </p>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center gap-4 pt-6 lg:pt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 0}
                    className="h-10 w-10 shrink-0"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    Page {currentPage + 1} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages - 1}
                    className="h-10 w-10 shrink-0"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Masonry Layout */}
          <div className="lg:col-span-8 order-2 lg:order-2">
            <div className="columns-1 sm:columns-2 lg:columns-1 xl:columns-2 gap-4 sm:gap-6">
              {currentTweets.map((tweetId) => (
                <div 
                  key={tweetId} 
                  className="tweet-container break-inside-avoid mb-4 sm:mb-6"
                >
                  <Tweet id={tweetId} />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {currentTweets.length === 0 && (
              <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] border-2 border-dashed border-border rounded-xl">
                <p className="text-muted-foreground">No tweets to display</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .tweet-container [data-theme="dark"] {
          --tweet-bg-color: hsl(var(--card));
          --tweet-border-color: hsl(var(--border));
          --tweet-text-color: hsl(var(--foreground));
          --tweet-font-family: inherit;
        }
        
        .tweet-container [data-theme="light"] {
          --tweet-bg-color: hsl(var(--card));
          --tweet-border-color: hsl(var(--border));
          --tweet-text-color: hsl(var(--foreground));
          --tweet-font-family: inherit;
        }

        .tweet-container article {
          border-radius: 0.75rem !important;
        }

        /* Ensure tweets fit their content height */
        .tweet-container {
          max-width: 100%;
          height: auto !important;
        }
        
        .tweet-container > div {
          height: auto !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
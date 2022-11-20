import React from 'react'

function Footer() {
  return (
    <footer class="mt-32">
        <div class="sm:px-8">
            <div class="mx-auto max-w-7xl lg:px-8">
                <div class="border-t pt-10 pb-16 border-zinc-700/40">
                    <div class="relative px-4 sm:px-8 lg:px-12">
                        <div class="mx-auto max-w-2xl lg:max-w-5xl">
                            <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                                <div class="flex gap-6 text-sm font-medium text-zinc-200">
                                    <a class="transition hover:text-blue-600" href="/about">About</a>
                                    <a class="transition hover:text-blue-600" href="/projects">Projects</a>
                                    <a class="transition hover:text-blue-600" href="/articles">Articles</a>
                                    <a class="transition hover:text-blue-600" href="/experience">Experience</a>
                                </div>
                                <p class="text-sm text-zinc-400 dark:text-zinc-500">© {new Date().getFullYear()} Hemaprakash Raghu. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
bg-purple-500/50" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.gallery.map((photo) => (
                <Card key={photo.url} className="overflow-hidden group">
                  <div className="relative h-64">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">{photo.caption}</div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Media Coverage */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Media Coverage</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.mediaHighlights.map((media) => (
                <Card key={media.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <NewspaperIcon className="w-8 h-8 text-purple-400 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{media.title}</h3>
                      <div className="text-sm text-gray-300">
                        {media.source} • {media.date}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
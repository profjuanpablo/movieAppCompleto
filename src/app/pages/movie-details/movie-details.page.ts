import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: any | null = null;
  imageBaseUrl = environment.images;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.movieService.getMovieDetails(id).subscribe((res) => {
      console.log(id);
      this.movie = res;
    });
  }

  openHomepage(URL: string) {
    window.open(URL, '_blank');
  }
}

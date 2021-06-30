import {
  Arg, Mutation, Query, Resolver,
} from 'type-graphql';
import VideoSchema from '../../models/VideoSchema';
import { Video } from './Video';
import { VideoInput } from './VideoInput';

@Resolver(Video)
export class VideoResolver {
  @Query(() => [Video])
  async videos() {
    return VideoSchema.find();
  }

  @Mutation(() => Video)
  async createVideo(@Arg('videoInput') videoInput: VideoInput) {
    const video = await VideoSchema.create(videoInput);
    return VideoSchema.findById(video.id).populate('category');
  }
}

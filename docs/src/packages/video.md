# Video
[![codecov](https://codecov.io/gh/EscolaLMS/Video/branch/main/graph/badge.svg?token=O91FHNKI6R)](https://codecov.io/gh/EscolaLMS/Video)
[![phpunit](https://github.com/EscolaLMS/Video/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Video/actions/workflows/test.yml)
[![downloads](https://img.shields.io/packagist/dt/escolalms/video)](https://packagist.org/packages/escolalms/video)
[![downloads](https://img.shields.io/packagist/v/escolalms/video)](https://packagist.org/packages/escolalms/video)
[![downloads](https://img.shields.io/packagist/l/escolalms/video)](https://packagist.org/packages/escolalms/video)

## What does it do
Coverts TopicVideo into HLS stream.

## Installing
- `composer require escolalms/video`

## Requirements
- `ffmpeg` must be installed
- Once `EscolaLms\TopicType\TopicTypeChanged` is dispatched job [ProccessVideo](src/Jobs/ProccessVideo.php) added to queue

## Example
This package extends API resources in `EscolaLms\TopicType` package.

- `\EscolaLms\TopicTypes\Http\Resources\TopicType\Client\VideoResource` - replaces value and url fields with hls values
```json
{
  "id": 1,
  "value": "course/1/topic/1/video/hls.m3u8",
  "url": "https://escolalms.com/course/1/topic/1/video/hls.m3u8"
}
```
- `\EscolaLms\TopicTypes\Http\Resources\TopicType\Admin\VideoResource` - adds hls values
```json
{
  "id": 1,
  "value": "course/1/topic/1/video/video.mp4",
  "url": "https://escolalms.com/course/1/topic/1/video/video.mp4",
  "hls": "course/1/topic/1/video/hls.m3u8",
  "hls_url": "https://escolalms.com/course/1/topic/1/video/hls.m3u8"
}
```

The processing status is saved in the json field in the `topics` table:
- Processing successful
```json
{
  "ffmpeg": {
    "state": "finished",
      "path": "course/1/topic/1/video/hls.m3u8"
  }
}
```
- Processing failed
```json
{
  "ffmpeg": {
    "state" : "error",
    "message" : "Unable to probe /path/video.mp4"
  }
}
``` 

## Tests
Run `./vendor/bin/phpunit` to run tests. See [tests](tests) folder as it's quite good staring point as documentation appendix.

Test details
[![codecov](https://codecov.io/gh/EscolaLMS/Video/branch/main/graph/badge.svg?token=O91FHNKI6R)](https://codecov.io/gh/EscolaLMS/Video)
[![phpunit](https://github.com/EscolaLMS/Video/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Video/actions/workflows/test.yml)

## Events
1. `ProcessVideoStarted` - event dispatched after processing started
2. `ProcessVideoFailed` - event dispatched after processing failed

import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

// PartialType은 @nestjs/mapped-types 모듈의 도움을 받아 필드를 부분 매핑한다.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}

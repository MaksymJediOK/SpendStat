import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function start() {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('SpendStat api')
        .setDescription('rest api for app')
        .setVersion('1')
        .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())
    await app.listen(3000, () => {
        console.log('server started :)')
    })
}
start()

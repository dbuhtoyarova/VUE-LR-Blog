<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
            height="200px"
            src="img/background.jpg"
        >

          <v-card-title class="white--text mt-16">
            <v-avatar size="86">
              <img
                  alt="user"
                  src="img/photo.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              Дарья Бухтоярова
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>

          <v-timeline
              align-top
              dense
          >
            <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> {{ message.time }}
                </div>
                <div v-html="message.message"></div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    messages: [
      {
        from: 'Образование',
        message: `Бакалавр в направлении приборостроение НГТУ «НЭТИ» 2018-2021гг <br/>
        Магистр в направлении приборостроение НГТУ «НЭТИ» 2021-2023гг`,
        color: 'deep-purple lighten-1',
      },
      {
        from: 'Опыт работы',
        message: 'Преподаватель в школе робототехники "Лига Роботов" ' +
            ' <br/> Инженер-программист на предприятии "АО РиМ" ',
        color: 'green',
      },
      {
        from: 'Увлечения',
        message: 'Танцы <br/> Большой теннис',
        color: 'deep-purple lighten-1',
      },
    ],
  }),
}
</script>
<style scoped>
</style>
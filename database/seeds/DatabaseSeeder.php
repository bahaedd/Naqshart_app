<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        DB::statement("INSERT INTO `about_contents` ( `body1_en`, `body1_ar`, `body_image`, `body2_en`, `body2_ar`, `created_at`, `updated_at`, `deleted_at`) VALUES
( 'You, like everyone else on this planet, were born a creative person with good intentions. Able to change the world in ways so much bigger than you probably can imagine right now. All the rules of society then programmed you to think and calculate yourself through life in a way that is useful and not disturbing anyone else. Conforming to this norm made you fit in, but also stripped you of your boundless childlike creativity, imagination and lust for exploration.\r\n\r\nRight now, what the world needs most, is people who find that version of themselves back again. People who come alive again. People who wonder, can be amazed and feel ecstatic like they did when they were little kids. Bringing you alive again, and reminding you of the version of yourself that can do anything, that is our mission.', 'أنت ، مثل أي شخص آخر على هذا الكوكب ، ولدت شخصًا مبدعًا بنوايا حسنة. قادر على تغيير العالم بطرق أكبر بكثير مما تتخيله الآن. ثم برمجتك جميع قواعد المجتمع على التفكير وحساب نفسك من خلال الحياة بطريقة مفيدة ولا تزعج أي شخص آخر. التوافق مع هذا المعيار جعلك مناسبًا ، ولكنه أيضًا جردك من إبداعك الطفولي اللامحدود وخيالك وشغفك بالاستكشاف. في الوقت الحالي ، أكثر ما يحتاجه العالم ، هو الأشخاص الذين يجدون هذه النسخة من أنفسهم تعود مرة أخرى. الناس الذين عادوا إلى الحياة مرة أخرى. الأشخاص الذين يتساءلون ، يمكن أن يندهشوا ويشعروا بالنشوة كما فعلوا عندما كانوا أطفالًا صغارًا. إن إحياءك للحياة مرة أخرى ، وتذكيرك بنسخة نفسك القادرة على فعل أي شيء ، هذه هي مهمتنا.', 'images/5f3f96c55429b.jpg', 'Behind every artwork we sell, there are ideas, visions, amazing artists and great stories. On this page we highlight some of that. If you want to learn more about an artwork you are about to buy, but the artist is not listed on this page, click on their name during shopping and you will get redirected straight to their most important social media account or website.', 'وراء كل عمل فني نبيعه ، هناك أفكار ورؤى وفنانين رائعين وقصص رائعة. في هذه الصفحة نبرز بعضًا من ذلك. إذا كنت ترغب في معرفة المزيد حول عمل فني أنت على وشك شرائه ، ولكن الفنان غير مدرج في هذه الصفحة ، فانقر فوق اسمه أثناء التسوق وستتم إعادة توجيهك مباشرةً إلى حسابه أو موقعه على وسائل التواصل الاجتماعي الأكثر أهمية.', '2020-08-16 17:01:47', '2020-08-21 07:41:25', NULL);");

        DB::statement("INSERT INTO `about__contacts` (`id`, `name`, `email`, `phone`, `message`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'ahmed', 'Fares@gmail.com', '022126546', 'nice website', '2020-08-16 17:06:05', '2020-08-16 17:06:05', NULL),
(2, 'dfsdfsdf', 'asdasd@gmail.com', '05024325465', 'aaaaaaaaaaaa', '2020-08-21 07:58:32', '2020-08-21 07:58:32', NULL),
(3, 'aaaa', 'ahmed@gmail.com', '0121011215', '1024534534865', '2020-08-27 10:17:23', '2020-08-27 10:17:23', NULL);");

        DB::statement("INSERT INTO `about__contacts__texts` (`id`, `text_en`, `text_ar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Do you have any questions? Have a look at the categories below, and if these do not include the answer you were looking for, please feel free to shoot us an email.', 'هل لديك اسئلة؟ ألق نظرة على الفئات أدناه ، وإذا كانت لا تتضمن الإجابة التي كنت تبحث عنها ، فلا تتردد في مراسلتنا عبر البريد الإلكتروني.', '2020-08-16 17:02:32', '2020-08-16 17:02:32', NULL);");

        DB::statement("INSERT INTO `appliedartists` (`id`, `name`, `email`, `phone`, `created_at`, `updated_at`, `deleted_at`, `socialLink`) VALUES
(1, 'sdsd@gmail.com', 'hazem@gmail.com', '04121026', '2020-08-16 17:06:33', '2020-08-16 17:06:33', NULL, 'www.google.com'),
(2, 'aaaa', 'aaaaa@gmail.com', '010023565', '2020-08-21 07:58:10', '2020-08-21 07:58:10', NULL, 'www.facebook.com'),
(3, 'msdfnlkdfl', 'kwejlwk@gmail.com', '01242425', '2020-08-27 10:18:39', '2020-08-27 10:18:39', NULL, 'cairo@gmail.com');");

        DB::statement("INSERT INTO `artists` (`id`, `name`, `cover_img`, `created_at`, `updated_at`) VALUES
(1, 'Herb Aach', 'images/5f3f95b3bc470.jpg', '2020-08-16 16:42:52', '2020-08-21 07:36:51'),
(2, 'Vilmos Aba-Novák', 'images/5f3f95c69201a.jpg', '2020-08-16 16:43:24', '2020-08-21 07:37:10'),
(3, 'Monarch',  'images/5f47a156c2c3f.jpg', '2020-08-27 10:04:38', '2020-08-27 10:04:38');");

        DB::statement("INSERT INTO `discounts` (`id`, `code`, `discount_percentage`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Fares10', '10', '2020-08-16 17:12:08', '2020-08-16 17:12:08', NULL);");

        DB::statement("INSERT INTO `home_datas` (`id`, `word1_en`, `word1_ar`, `word2_en`, `word2_ar`,  `image`, `video`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Live now', 'لايف الان', 'Fantastic new art', 'مكتبه فن جديدة',  'images/5f3f96b7d7b50.jpg', 'videos/5f3f96b80c294.gif', '2020-08-16 16:40:12', '2020-08-21 07:41:12', NULL);");

        DB::statement("INSERT INTO `joinus__texts` (`id`, `text_en`, `text_ar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'You might already have a contact page live on your site. But does it have a contact form or just a company email address?', 'قد يكون لديك بالفعل صفحة اتصال موجودة على موقعك. ولكن هل يحتوي على نموذج اتصال أم مجرد عنوان بريد إلكتروني للشركة؟', '2020-08-16 17:05:00', '2020-08-16 17:05:00', NULL);");

        DB::statement("INSERT INTO `orders` (`id`, `email`, `fname`, `lname`, `address`, `apartment`, `city`, `postcode`, `goverment`, `country`, `phone`, `paymentid`, `paymentstatus`, `promocode`, `discount`, `totalprice`, `payment_transaction_return`, `created_at`, `updated_at`) VALUES
(1, 'ahmed@gmail.com', 'ahmed', 'ali', '3 cairo misr', '3', 'cairo', '02002', 'Saudi Arabia', 'Egypt', '01025659596', 'E7F3A1335855BF38D3E44A058E5332C0.uat01-vm-tx03', 'pending', NULL, NULL, '2500', NULL, '2020-08-16 16:54:42', '2020-08-16 16:54:42'),
(2, 'jack@gmail.com', 'ahmed', 'hassan', '3 cairo', '3', 'cairo', '0200', 'Saudi Arabia', 'Saudi Arabia', '0102356566', '0BFB096DFE71E18F470DF1886F309B52.uat01-vm-tx02', 'pending', NULL, NULL, '1200', NULL, '2020-08-20 12:08:34', '2020-08-20 12:08:34'),
(3, 'ahmed@gmail.com', 'ahmed', 'ali', 'cairo', 'cairo', 'cairo', '022121', 'Saudi Arabia', 'Saudi Arabia', '1021124154515', 'C8EB1F25EE6B1BC88829810810935516.uat01-vm-tx02', 'pending', NULL, NULL, '2400', NULL, '2020-08-27 10:00:19', '2020-08-27 10:00:19');");

        DB::statement("INSERT INTO `palettes` (`id`, `name`, `img`, `palette_copies`, `avalible_copies`, `S_copies`, `S_avalible`, `S_price`, `M_copies`, `M_avalible`, `M_price`, `L_copies`, `L_avalible`, `L_price`, `sizing_details`, `print_material`, `print_ink`, `print_finish`, `frame_material`, `frame_finish`, `artist_id`, `created_at`, `updated_at`, `deleted_at`, `addtocart`, `tag`, `sizing_details_ar`, `print_material_ar`, `print_ink_ar`, `print_finish_ar`, `frame_material_ar`, `frame_finish_ar`, `description`, `description_ar`, `shipping`, `shipping_ar`) VALUES
(1, 'Full bom', 'images/5f3f9537eed4f.jpg', 20, 10, 5, 5, '50', 10, 5, '100', 5, 5, '200', '30x40cm (12x16', '200gsm canvas Print ink.', '12-colour digital, archival ink', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Marupa wood, neodynium magnets', 'Semi-gloss', 1, '2020-08-16 16:44:17', '2020-08-29 05:48:46', NULL, 1, 'going fast', '30 × 40 سم (12 × 16 بوصة) ، 50 × 66.5 سم (20 × 26', 'اتلتتناناان', 'حبر أرشيفى رقمى 12 لون', 'يُرجى الانتظار 9-12 يومًا حتى يصل طلبك. لماذا كل هذا الوقت؟', 'خشب ماروبا ، مغناطيس نيودينيوم', 'شبه لامع', 'This limited edition release is printed in bright, vivid colors on a thick piece of woven', 'تمت طباعة هذا الإصدار المحدود بألوان زاهية وحيوية على قطعة سميكة من القماش المنسوج بتأثير معدني. تحتوي كل طبعة على', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'يُرجى الانتظار 9-12 يومًا حتى يصل طلبك. لماذا كل هذا الوقت؟'),
(2, 'Monarch', 'images/5f3f956ba846d.jpg', 30, 18, 5, 5, '50', 12, 0, '200', 13, 13, '500', 'Each artwork is made available in three sizes: 30x40cm (12x16\"), 50x66.5cm (20x26\") and 70x93.5cm (28x37\").', 'Print material: 200gsm canvas Print ink.', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Marupa wood, neodynium magnets', 'Semi-gloss', 1, '2020-08-16 16:45:56', '2020-08-27 10:00:44', NULL, 1, 'knitwork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Forgotten', 'images/5f3f95e61d862.jpg', 10, 7, 1, 1, '150', 3, 0, '300', 6, 6, '600', 'Each artwork is made available in three sizes: 30x40cm (12x16\"), 50x66.5cm (20x26\") and 70x93.5cm (28x37\").', 'Print material: 200gsm canvas Print ink.', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Marupa wood, neodynium magnets', 'Semi-gloss', 1, '2020-08-16 16:47:04', '2020-08-21 07:37:42', NULL, 1, 'going fast', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Rocket', 'images/5f3f961607487.jpg', 60, 60, 20, 20, '200', 20, 20, '600', 20, 20, '800', 'Each artwork is made available in three sizes: 30x40cm (12x16\"), 50x66.5cm (20x26\") and 70x93.5cm (28x37\").', 'Print material: 200gsm canvas Print ink.', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Marupa wood, neodynium magnets', 'Semi-gloss', 2, '2020-08-16 16:48:57', '2020-08-21 07:38:30', NULL, 1, 'ecstase originals', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'swept', 'images/5f3f9651be2af.jpg', 40, 36, 20, 20, '200', 10, 6, '300', 10, 10, '600', 'Each artwork is made available in three sizes: 30x40cm (12x16\"), 50x66.5cm (20x26\") and 70x93.5cm (28x37\").', 'Print material: 200gsm canvas Print ink.', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Marupa wood, neodynium magnets', 'Semi-gloss', 2, '2020-08-16 16:50:10', '2020-08-21 07:39:29', NULL, 1, 'diamond dust', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Space', 'images/5f3f967ed5de7.jpg', 100, 99, 20, 20, '200', 15, 14, '600', 65, 65, '800', 'Each artwork is made available in three sizes: 30x40cm (12x16\"), 50x66.5cm (20x26\") and 70x93.5cm (28x37\").', 'Print material: 200gsm canvas Print ink.', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Marupa wood, neodynium magnets', 'Semi-gloss', 2, '2020-08-16 16:51:08', '2020-08-21 07:40:14', NULL, 1, 'knitwork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'Forgotten', 'images/5f47a2aa77a6e.jpg', 60, 60, 20, 20, '100', 20, 20, '200', 20, 20, '300', 'Each artwork is made available in three sizes: 30x40cm (12x16\"), 50x66.5cm (20x26\") and 70x93.5cm (28x37\").', 'Print material: 200gsm canvas Print ink.', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Please allow 9-12 days for your order to arrive.  Why so long?', 'Marupa wood, neodynium magnets', 'Semi-gloss', 3, '2020-08-27 10:10:18', '2020-08-27 10:11:20', NULL, 1, 'knitwork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);");

        DB::statement("INSERT INTO `order_palettes` (`id`, `order_id`, `palatte_id`, `size`, `extrainfo`, `price`, `quantity`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'medium', NULL, 100, 4, NULL, '2020-08-16 16:54:42', '2020-08-16 16:54:42'),
(2, 1, 5, 'medium', NULL, 300, 4, NULL, '2020-08-16 16:54:42', '2020-08-16 16:54:42'),
(3, 1, 3, 'medium', NULL, 300, 3, NULL, '2020-08-16 16:54:42', '2020-08-16 16:54:42'),
(4, 2, 6, 'medium', NULL, 600, 1, NULL, '2020-08-20 12:08:34', '2020-08-20 12:08:34'),
(5, 2, 1, 'medium', NULL, 100, 6, NULL, '2020-08-20 12:08:34', '2020-08-20 12:08:34'),
(6, 3, 2, 'medium', NULL, 200, 12, NULL, '2020-08-27 10:00:19', '2020-08-27 10:00:19');");

        DB::statement("INSERT INTO `paletteimages` (`id`, `img`, `palatte_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(43, 'images/5f3f955710c26.jpg', 1, '2020-08-21 07:35:19', '2020-08-21 07:35:19', NULL),
(44, 'images/5f3f95572ba38.jpg', 1, '2020-08-21 07:35:19', '2020-08-21 07:35:19', NULL),
(45, 'images/5f3f955740c7c.jpg', 1, '2020-08-21 07:35:19', '2020-08-21 07:35:19', NULL),
(46, 'images/5f3f9557562a7.jpg', 1, '2020-08-21 07:35:19', '2020-08-21 07:35:19', NULL),
(47, 'images/5f3f95576d1dc.jpg', 1, '2020-08-21 07:35:19', '2020-08-21 07:35:19', NULL),
(48, 'images/5f3f955781a1e.jpg', 1, '2020-08-21 07:35:19', '2020-08-21 07:35:19', NULL),
(49, 'images/5f3f955796667.jpg', 1, '2020-08-21 07:35:19', '2020-08-21 07:35:19', NULL),
(50, 'images/5f3f958e16ee0.jpg', 2, '2020-08-21 07:36:14', '2020-08-21 07:36:14', NULL),
(51, 'images/5f3f958e3483e.jpg', 2, '2020-08-21 07:36:14', '2020-08-21 07:36:14', NULL),
(52, 'images/5f3f958e4a280.jpg', 2, '2020-08-21 07:36:14', '2020-08-21 07:36:14', NULL),
(53, 'images/5f3f958e5e787.jpg', 2, '2020-08-21 07:36:14', '2020-08-21 07:36:14', NULL),
(54, 'images/5f3f958e75fc2.jpg', 2, '2020-08-21 07:36:14', '2020-08-21 07:36:14', NULL),
(55, 'images/5f3f958e8cd4b.jpg', 2, '2020-08-21 07:36:14', '2020-08-21 07:36:14', NULL),
(56, 'images/5f3f958ea2963.jpg', 2, '2020-08-21 07:36:14', '2020-08-21 07:36:14', NULL),
(57, 'images/5f3f96073cbba.jpg', 3, '2020-08-21 07:38:15', '2020-08-21 07:38:15', NULL),
(58, 'images/5f3f960754189.jpg', 3, '2020-08-21 07:38:15', '2020-08-21 07:38:15', NULL),
(59, 'images/5f3f960766d95.jpg', 3, '2020-08-21 07:38:15', '2020-08-21 07:38:15', NULL),
(60, 'images/5f3f96077ad63.jpg', 3, '2020-08-21 07:38:15', '2020-08-21 07:38:15', NULL),
(61, 'images/5f3f96078f7b8.jpg', 3, '2020-08-21 07:38:15', '2020-08-21 07:38:15', NULL),
(62, 'images/5f3f9607a25cf.jpg', 3, '2020-08-21 07:38:15', '2020-08-21 07:38:15', NULL),
(63, 'images/5f3f9607b5ebd.jpg', 3, '2020-08-21 07:38:15', '2020-08-21 07:38:15', NULL),
(64, 'images/5f3f96385f03d.jpg', 4, '2020-08-21 07:39:04', '2020-08-21 07:39:04', NULL),
(65, 'images/5f3f96387520f.jpg', 4, '2020-08-21 07:39:04', '2020-08-21 07:39:04', NULL),
(66, 'images/5f3f963889080.jpg', 4, '2020-08-21 07:39:04', '2020-08-21 07:39:04', NULL),
(67, 'images/5f3f96389b6b3.jpg', 4, '2020-08-21 07:39:04', '2020-08-21 07:39:04', NULL),
(68, 'images/5f3f9638afa07.jpg', 4, '2020-08-21 07:39:04', '2020-08-21 07:39:04', NULL),
(69, 'images/5f3f9638c319a.jpg', 4, '2020-08-21 07:39:04', '2020-08-21 07:39:04', NULL),
(70, 'images/5f3f9638d5a20.jpg', 4, '2020-08-21 07:39:04', '2020-08-21 07:39:04', NULL),
(71, 'images/5f3f9670c2c26.jpg', 5, '2020-08-21 07:40:00', '2020-08-21 07:40:00', NULL),
(72, 'images/5f3f9670db5f1.jpg', 5, '2020-08-21 07:40:00', '2020-08-21 07:40:00', NULL),
(73, 'images/5f3f9670f0e3c.jpg', 5, '2020-08-21 07:40:01', '2020-08-21 07:40:01', NULL),
(74, 'images/5f3f967112e00.jpg', 5, '2020-08-21 07:40:01', '2020-08-21 07:40:01', NULL),
(75, 'images/5f3f967128f46.jpg', 5, '2020-08-21 07:40:01', '2020-08-21 07:40:01', NULL),
(76, 'images/5f3f96713c312.jpg', 5, '2020-08-21 07:40:01', '2020-08-21 07:40:01', NULL),
(77, 'images/5f3f96714f944.jpg', 5, '2020-08-21 07:40:01', '2020-08-21 07:40:01', NULL),
(78, 'images/5f3f96a1c0b0c.jpg', 6, '2020-08-21 07:40:49', '2020-08-21 07:40:49', NULL),
(79, 'images/5f3f96a1dbfc2.jpg', 6, '2020-08-21 07:40:49', '2020-08-21 07:40:49', NULL),
(80, 'images/5f3f96a200354.jpg', 6, '2020-08-21 07:40:50', '2020-08-21 07:40:50', NULL),
(81, 'images/5f3f96a21aec7.jpg', 6, '2020-08-21 07:40:50', '2020-08-21 07:40:50', NULL),
(82, 'images/5f3f96a2355a0.jpg', 6, '2020-08-21 07:40:50', '2020-08-21 07:40:50', NULL),
(83, 'images/5f3f96a24ecd3.jpg', 6, '2020-08-21 07:40:50', '2020-08-21 07:40:50', NULL),
(84, 'images/5f3f96a268320.jpg', 6, '2020-08-21 07:40:50', '2020-08-21 07:40:50', NULL),
(85, 'images/5f47a2cb5998a.jpg', 7, '2020-08-27 10:10:51', '2020-08-27 10:10:51', NULL),
(86, 'images/5f47a2cb72218.jpg', 7, '2020-08-27 10:10:51', '2020-08-27 10:10:51', NULL),
(87, 'images/5f47a2cb884fd.jpg', 7, '2020-08-27 10:10:51', '2020-08-27 10:10:51', NULL),
(88, 'images/5f47a2cb9cf5c.jpg', 7, '2020-08-27 10:10:51', '2020-08-27 10:10:51', NULL),
(89, 'images/5f47a2cbafcd8.jpg', 7, '2020-08-27 10:10:51', '2020-08-27 10:10:51', NULL),
(90, 'images/5f47a2cbc38b4.jpg', 7, '2020-08-27 10:10:51', '2020-08-27 10:10:51', NULL);");

        DB::statement("INSERT INTO `reviews` (`id`, `name`, `email`, `title`, `body`, `rate`, `like_counter`, `dislike_counter`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'ahmed', 'ahmed@gmail.com', 'ahmed', 'Nice work', 5, 0, 0, '2020-08-16 16:59:08', '2020-08-16 16:59:08', NULL),
(2, 'Kamel', 'Kamel@gmail.com', 'Kamel', 'very Good !', 5, 0, 0, '2020-08-21 09:01:03', '2020-08-21 09:01:03', NULL);");

        DB::statement("INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `admin_role`) VALUES
(1, 'fares', 'fares@gmail.com', NULL, '$2y$10\$K.Oh/FZMxZA0UFZsNVs41O2Vb5Ig8InN8shvoQm0xgSkp7wuGYRSm', NULL, '2020-08-16 16:34:05', '2020-08-16 16:34:05', '1'),
(2, 'ahmed1111', 'ahmed1111@gmail.com', NULL, '$2y$10$2nU15nFvQJiDEzraksvzsOBEGZQWgzh1YRPxwtJjNKhuqxW6mO0lu', NULL, '2020-08-21 08:59:37', '2020-08-27 10:02:33', '2');");
    }
}
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import { sleep } from "../utils/sleep.js";

export async function createComponentSection1(
  count: number,
  projectName: string
) {
  console.log(`\n${chalk.cyan(`Step ${count}:`)} Create Section1\n`);

  const rainbowText = chalkAnimation.rainbow("Creating Section1.astro...\n");

  const filePath = path.resolve(
    process.cwd(),
    projectName,
    "src",
    "components",
    "Section1.astro"
  );
  const fileContent = `---
import Form from "../../../../globals/components/form";
import {
  glossaryLetter_S,
  glossaryLetter_T,
} from "../../../../globals/translations/glossary";
import type { ComponentProps } from "../../../../globals/types/component-props";
import type { TranslationsType } from "../../../../globals/types/translations";
import { Button } from "./ui/button";

interface Props {
  componentProps: ComponentProps;
}
const { componentProps } = Astro.props;

const formBtn: TranslationsType = glossaryLetter_S.submit;

const para: TranslationsType = {
  en: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
  it: "Ma devo spiegarti come è nata tutta questa idea errata di denunciare il piacere e lodare il dolore, e ti darò un resoconto completo del sistema, esponendo gli insegnamenti reali del grande esploratore della verità, il maestro costruttore della felicità umana. Nessuno rifiuta, disprezza o evita il piacere in sé, perché è piacere, ma perché coloro che non sanno perseguirlo razionalmente incontrano conseguenze estremamente dolorose.",
  tr: "Ancak sana, zevki kötüleme ve acıyı övme fikrinin nasıl ortaya çıktığını açıklamam gerekiyor ve sana sistemin tam bir açıklamasını yapacağım, ayrıca gerçeğin büyük kaşifinin, insan mutluluğunun usta inşaatçısının gerçek öğretilerini anlatacağım. Hiç kimse, zevk olduğu için zevki reddetmez, sevmez veya kaçınmaz; ancak, zevki mantıklı bir şekilde nasıl takip edeceğini bilmeyenler son derece acı verici sonuçlarla karşılaşırlar.",
  ro: "Dar trebuie să îți explic cum a luat naștere această idee greșită de a condamna plăcerea și a lăuda durerea și îți voi oferi o relatare completă a sistemului, expunând adevăratele învățături ale marelui explorator al adevărului, arhitectul fericirii umane. Nimeni nu respinge, nu disprețuiește și nu evită plăcerea în sine, pentru că este plăcere, ci pentru că cei care nu știu să o urmărească rațional se confruntă cu consecințe extrem de dureroase.",
  ar: "لكن يجب أن أوضح لك كيف نشأت هذه الفكرة الخاطئة عن التنديد باللذة ومدح الألم، وسأقدم لك شرحًا كاملاً للنظام، وأوضح التعاليم الفعلية للمستكشف العظيم للحقيقة، باني السعادة الإنسانية. لا أحد يرفض أو يكره أو يتجنب اللذة نفسها لأنها لذة، بل لأن الذين لا يعرفون كيف يسعون وراء اللذة بشكل عقلاني يواجهون عواقب مؤلمة للغاية.",
  de: "Aber ich muss dir erklären, wie diese irrige Idee entstanden ist, das Vergnügen zu verurteilen und den Schmerz zu loben. Ich werde dir eine vollständige Darstellung des Systems geben und die tatsächlichen Lehren des großen Entdeckers der Wahrheit, des Baumeisters des menschlichen Glücks, darlegen. Niemand lehnt Vergnügen an sich ab, missbilligt es oder meidet es, weil es Vergnügen ist, sondern weil diejenigen, die nicht wissen, wie man Vergnügen vernünftig verfolgt, auf äußerst schmerzhafte Konsequenzen stoßen.",
  es: "Pero debo explicarte cómo nació esta idea equivocada de denunciar el placer y alabar el dolor, y te daré un relato completo del sistema, exponiendo las verdaderas enseñanzas del gran explorador de la verdad, el maestro constructor de la felicidad humana. Nadie rechaza, detesta o evita el placer en sí mismo porque es placer, sino porque aquellos que no saben cómo perseguirlo racionalmente enfrentan consecuencias extremadamente dolorosas.",
  sv: "Men jag måste förklara för dig hur denna felaktiga idé om att fördöma njutning och prisa smärta uppstod, och jag kommer att ge dig en fullständig redogörelse för systemet och förklara de faktiska lärorna från den stora utforskaren av sanningen, människans lyckas mästerbyggare. Ingen avvisar, ogillar eller undviker njutning i sig, eftersom det är njutning, utan för att de som inte vet hur man förföljer njutning rationellt möter extremt smärtsamma konsekvenser.",
  pt: "Mas devo explicar-lhe como surgiu esta ideia errada de denunciar o prazer e louvar a dor, e dar-lhe uma explicação completa do sistema, expondo os verdadeiros ensinamentos do grande explorador da verdade, o mestre construtor da felicidade humana. Ninguém rejeita, desgosta ou evita o prazer em si, porque é prazer, mas porque aqueles que não sabem como persegui-lo racionalmente encontram consequências extremamente dolorosas.",
  fi: "Mutta minun täytyy selittää sinulle, kuinka tämä virheellinen ajatus nautinnon tuomitsemisesta ja kivun ylistämisestä syntyi, ja annan sinulle täydellisen selonteon järjestelmästä sekä selitän totuuden suuren tutkijan, ihmisonnen mestarirakentajan, todelliset opetukset. Kukaan ei hylkää, inhoa tai välttele nautintoa itsessään, koska se on nautinto, vaan koska ne, jotka eivät osaa tavoitella sitä järkevästi, kohtaavat äärimmäisen tuskallisia seurauksia.",
  pl: "Ale muszę ci wyjaśnić, jak powstał ten błędny pomysł potępiania przyjemności i wychwalania bólu, i przedstawię ci pełny opis systemu, objaśniając rzeczywiste nauki wielkiego odkrywcy prawdy, mistrza budowniczego ludzkiego szczęścia. Nikt nie odrzuca, nie nie lubi ani nie unika samej przyjemności, ponieważ jest to przyjemność, ale dlatego, że ci, którzy nie wiedzą, jak racjonalnie ją dążyć, napotykają niezwykle bolesne konsekwencje.",
  hu: "De el kell magyaráznom neked, hogyan született meg ez a téves elképzelés az élvezet elítéléséről és a fájdalom dicsőítéséről, és teljes képet adok neked a rendszerről, valamint kifejtem az igazság nagy felfedezőjének, az emberi boldogság mesterépítőjének valódi tanításait. Senki sem utasítja el, nem veti meg vagy kerüli magát az élvezetet, mert élvezet, hanem azért, mert akik nem tudják, hogyan kövessék azt ésszerűen, rendkívül fájdalmas következményekkel szembesülnek.",
  th: "แต่ฉันต้องอธิบายให้คุณเข้าใจว่าแนวคิดที่ผิดพลาดเกี่ยวกับการประณามความสุขและการสรรเสริญความเจ็บปวดเกิดขึ้นได้อย่างไร และฉันจะให้คำอธิบายที่สมบูรณ์เกี่ยวกับระบบ รวมถึงอธิบายคำสอนที่แท้จริงของนักสำรวจความจริงผู้ยิ่งใหญ่ ผู้สร้างความสุขของมนุษย์ ไม่มีใครปฏิเสธ ไม่ชอบ หรือหลีกเลี่ยงความสุขในตัวเอง เพราะมันคือความสุข แต่เพราะผู้ที่ไม่รู้วิธีแสวงหาความสุขอย่างมีเหตุผลจะพบกับผลลัพธ์ที่เจ็บปวดอย่างมาก",
  ms: "Tetapi saya mesti menjelaskan kepada anda bagaimana idea yang salah mengenai mengutuk kesenangan dan memuji kesakitan ini lahir, dan saya akan memberikan anda penjelasan lengkap mengenai sistem serta menghuraikan ajaran sebenar daripada peneroka kebenaran yang hebat, pembina kebahagiaan manusia. Tiada siapa yang menolak, tidak menyukai atau mengelakkan kesenangan itu sendiri kerana ia adalah kesenangan, tetapi kerana mereka yang tidak tahu bagaimana mengejar kesenangan secara rasional menghadapi akibat yang amat menyakitkan.",
  vi: "Nhưng tôi phải giải thích cho bạn hiểu làm thế nào mà ý tưởng sai lầm về việc lên án niềm vui và ca ngợi nỗi đau này ra đời, và tôi sẽ cung cấp cho bạn một mô tả đầy đủ về hệ thống, đồng thời trình bày những giáo lý thực tế của nhà thám hiểm vĩ đại về sự thật, người xây dựng hạnh phúc của con người. Không ai từ chối, ghét bỏ hoặc tránh né niềm vui tự thân, vì nó là niềm vui, mà bởi vì những người không biết cách theo đuổi nó một cách hợp lý sẽ gặp phải những hậu quả vô cùng đau đớn.",
  showcase:
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
};
---

<section id="section1" class="section1">
  <div class="container flex flex-col items-start justify-start gap-4 py-4">
    <h1 class="text-3xl font-bold underline">{componentProps.brandObj.name}</h1>
    <p set:html={para[componentProps.lang]} />
    <Button>{glossaryLetter_T.thankYouTitle[componentProps.lang]}</Button>
    <Form
      componentProps={componentProps}
      button={formBtn[componentProps.lang]}
      id="form1"
      layout={2}
    />
    <div class="rounded-md border p-4">
      <pre
        class="text-wrap">const componentProps = {JSON.stringify(componentProps, null, 2)}</pre>
    </div>
  </div>
</section>`;

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    fs.writeFileSync(filePath, fileContent, "utf8");

    await sleep(750);

    rainbowText.stop();

    console.log(
      `${chalk.bgGreen(`Section1.astro`)} ${chalk.green(
        `has been created successfully!\n`
      )}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        chalk.red(`Error creating Section1.astro: ${error.message}`)
      );

      return;
    }

    console.log(`Something went wrong: ${error}`);
  }
}
